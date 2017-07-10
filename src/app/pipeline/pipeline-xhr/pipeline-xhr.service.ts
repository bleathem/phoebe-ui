import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pipeline, PackageBuild, TestCase } from '../pipeline.model';

import { LoadPipelinesAction, LoadPackageBuildsAction, LoadTestCasesAction } from '../pipeline.actions'
import { AddNotificationAction } from '../../notifications/notification.actions'
import { Notification } from '../../notifications/notification.model'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
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
             {
               "match": {
                 "ci_job.name":  null
               }
             },
             {
               "match": {
                 "ci_job.number": null
               }
             }
         ]
      }
     },
   "size": 0,
   "aggs": {
         "testcase_state": {
           "terms": {
             "field": "testcase.status",
             "size": 0
           }
     }
   }
  }

  constructor (private http: Http) { }

  getPipelines(): Observable<Pipeline[]> {
    let url = this.elasticUrl + encodeURIComponent(this.path) + '/_search';
    return this.http.post(url, JSON.stringify(this.pipelineQuery))
    .map(this.extractPipeline)
    .catch(error => {throw new Error(`Error retrieving Pipeline Runs from ${this.elasticUrl}`)});
  }

  getPackageBuilds(pipeline: Pipeline): Observable<PackageBuild[]> {
    let url = this.elasticUrl + encodeURIComponent(this.path) + '/_search';
    let query = JSON.parse(JSON.stringify(this.packageQuery));
    query.query.match['ci_job.name'] = pipeline.key;
    return this.http.post(url, JSON.stringify(query))
    .map(this.extractPackageBuild)
    .catch(error => {throw new Error(`Error retrieving Package Builds from ${this.elasticUrl}`)});
  }

  getTestCases(pipeline: Pipeline, packageBuild: PackageBuild) {
    let url = this.elasticUrl + encodeURIComponent(this.path) + '/_search';
    let query = JSON.parse(JSON.stringify(this.testCaseQuery));
    query.query.bool.must[0].match['ci_job.name'] = pipeline.key;
    query.query.bool.must[1].match['ci_job.number'] = packageBuild.key;
    return this.http.post(url, JSON.stringify(query))
    .map(this.extractTestCase)
    .catch(error => {throw new Error(`Error retrieving Test Cases from ${this.elasticUrl}`)});
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

  private extractTestCase(res: Response) {
    let body = res.json();
    console.log(JSON.stringify(body, null, 2));
    return body.aggregations.testcase_state.buckets
    .map(bucket => {
      return new TestCase(bucket.key, bucket.doc_count);
    });
  }

}
