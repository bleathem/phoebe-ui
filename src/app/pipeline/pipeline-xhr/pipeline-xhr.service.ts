import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pipeline, PackageBuild, TestSuite, TestCase } from '../pipeline.model';
import { RandomDataService } from './random-data.service'

import { AddNotificationAction } from '../../notifications/notification.actions'
import { Notification } from '../../notifications/notification.model'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PipelineXhrService {
  private elasticUrl = 'http://elasticsearch.perf.lab.eng.bos.redhat.com/';
  private path = '<jenkins-staging2-logs-{now/d-2d}>,<jenkins-staging2-logs-{now/d-1d}>,<jenkins-staging2-logs-{now/d}>,';
  private pipelineQuery = {
    "query": {
      "prefix": {
        "ci_job.name":  "Interop"
      }
    },
    "size": 0,
    "aggs": {
      "job_list": {
        "terms": {
          "field": "ci_job.name",
          "size": 0
        }
      }
    }
  };
  private packageQuery = {
    "query": {
      "match": {
        "ci_job.name": null
      }
    },
    "size": 0,
    "aggs": {
      "buildID_list": {
        "terms": {
          "field": "ci_job.number",
          "size": 0
        }
      }
    }
  };
  private testCaseQuery = {
    "query": {
      "bool": {
        "must": [
          { "match": { "ci_job.name":  null }},
          { "match": { "ci_job.number": null }}
        ]
      }
    },
    "size": 0,
    "aggs": {
      "testsuite_name":{
        "terms":{
          "field": "testcase.testsuite.name",
          "size": 0
        },
        "aggs": {
          "testcase_state": {
            "terms": {
              "field": "testcase.status",
              "size": 0
            }
          }
        }
      }
    }
  }

  private queryAllPipelinesAndPackageBuilds = {
    "query": {
      "prefix": {
        "ci_job.name": "Interop"
      }
    },
    "size": 0,
    "aggs": {
      "job_name": {
        "terms": {
          "field": "ci_job.name",
          "size": 0
        },
        "aggs": {
          "build_agg": {
            "terms": {
              "field": "ci_job.number"
            }
          }
        }
      }
    }
  }


  constructor (private http: Http, private randomDataService: RandomDataService) { }

  getPipelines(): Observable<Pipeline[]> {
    let url = this.elasticUrl + encodeURIComponent(this.path) + '/_search';
    return this.http.post(url, JSON.stringify(this.pipelineQuery))
    .map(this.extractPipeline)
    .catch(this.handleError)
    .catch(error => {throw new Error(`Error retrieving Pipeline Runs from ${this.elasticUrl}`)});
  }

  getPackageBuilds(pipeline: Pipeline): Observable<PackageBuild[]> {
    let url = this.elasticUrl + encodeURIComponent(this.path) + '/_search';
    let query = JSON.parse(JSON.stringify(this.packageQuery));
    query.query.match['ci_job.name'] = pipeline.key;
    return this.http.post(url, JSON.stringify(query))
    .map(this.extractPackageBuild)
    .catch(this.handleError)
    .catch(error => {throw new Error(`Error retrieving Package Builds from ${this.elasticUrl}`)});
  }

  getAllPipelinesAndPackageBuilds() {
    let url = this.elasticUrl + encodeURIComponent(this.path) + '/_search';
    let query = JSON.parse(JSON.stringify(this.queryAllPipelinesAndPackageBuilds));
    return this.http.post(url, JSON.stringify(query))
    .map(this.extractPipelineAndPackageBuild)
    .catch(this.handleError)
    .catch(error => {throw new Error(`Error retrieving Test Cases from ${this.elasticUrl}`)});
  }

  getTestSuitesByPipelineAndPackageBuild(pipeline: Pipeline, packageBuild: PackageBuild): Observable<TestSuite[]> {
    let url = this.elasticUrl + encodeURIComponent(this.path) + '/_search';
    let query = JSON.parse(JSON.stringify(this.testCaseQuery));
    query.query.bool.must[0].match['ci_job.name'] = pipeline.key;
    query.query.bool.must[1].match['ci_job.number'] = packageBuild.key;
    return this.http.post(url, JSON.stringify(query))
    .map(this.extractTestSuites.bind(this))
    .catch(this.handleError)
    .catch(error => {throw new Error(`Error retrieving Test Cases from ${this.elasticUrl}`)});
  }

  getTestSuitesByPipeline(pipeline: Pipeline) {
    let requests = [];
    pipeline.packageBuilds.forEach(packageBuild => {
      requests.push(
        this.getTestSuitesByPipelineAndPackageBuild(pipeline, packageBuild)
        .map(testSuites => {
          return {
            pipeline: pipeline,
            packageBuild: packageBuild,
            testSuites: testSuites
          }
        })
      );
    });
    return Observable.merge(requests);
  }

  private extractPipeline(res: Response) {
    let body = res.json();
    // console.log(JSON.stringify(body, null, 2));
    return body.aggregations.job_list.buckets
    .map(bucket => {
      return new Pipeline(bucket.key, bucket.doc_count);
    });
  }

  private extractPackageBuild(res: Response) {
    let body = res.json();
    // console.log(JSON.stringify(body, null, 2));
    return body.aggregations.buildID_list.buckets
    .map(bucket => {
      return new PackageBuild(bucket.key, bucket.doc_count);
    });
  }

  private extractPipelineAndPackageBuild(res: Response) {
    let body = res.json();
    // console.log(JSON.stringify(body, null, 2));
    return body.aggregations.job_name.buckets
    .map(bucket => {
      let pipeline = new Pipeline(bucket.key, bucket.doc_count);
      pipeline.packageBuilds = bucket.build_agg.buckets
      .map(bucket => {
        return new PackageBuild(bucket.key, bucket.doc_count);
      });
      return pipeline;
    });
  }

  private extractTestSuites(res: Response): TestSuite[] {
    let body = res.json();
    // console.log(JSON.stringify(body, null, 2));
    let self = this;
    let testSuites = body.aggregations.testsuite_name.buckets
    .map(bucket => {
      let testSuite = new TestSuite(bucket.key);
      bucket.testcase_state.buckets.forEach(bucket => {
        let testCase = new TestCase(self.capitalizeFirstLetter(bucket.key), bucket.doc_count);
        testSuite.testCases.push(testCase);
      });
      return testSuite;
    });
    // for (let i = testSuites.length; i < 6; i++) {
    //   testSuites.push(this.randomDataService.getRandomTestSuite(`Random Test Suite #${i+1}`));
    // }
    return testSuites;
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message || error.toString();
    }
    console.error(errMsg);
    if (error.stack) {
      console.error(error.stack);
    }
    return Observable.throw(errMsg);
  }

  private capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
