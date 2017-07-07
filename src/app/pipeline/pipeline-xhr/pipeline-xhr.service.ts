import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';
import { Pipeline, PackageBuild, TestCase } from '../pipeline.model';

import { LoadPipelinesAction, LoadPackageBuildsAction, LoadTestCasesAction } from '../pipeline.actions'

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

  constructor (private http: Http, private store: Store<AppStore>) {
    this.store.select(store => store.pipelineState && store.pipelineState.selectedPipeline)
    .subscribe(pipeline => {
      pipeline && this.loadPackageBuilds(pipeline);
    });

    this.store.select(store => store.pipelineState && store.pipelineState.selectedPackageBuild)
    .withLatestFrom(this.store.select(store => store.pipelineState && store.pipelineState.selectedPipeline))
    .subscribe(([packageBuild, pipeline]) => {
      pipeline && packageBuild && this.loadTestCases(pipeline, packageBuild);
    });
  }

  loadPipelines(): void {
    this.getPipelines()
    .subscribe(pipelines => {
      let action = new LoadPipelinesAction(pipelines);
      this.store.dispatch(action);
    })
  }

  loadPackageBuilds(pipeline: Pipeline): void {
    this.getPackageBuilds(pipeline)
    .subscribe(packageBuilds => {
      pipeline.packageBuilds = packageBuilds;
      let action = new LoadPackageBuildsAction(pipeline);
      this.store.dispatch(action);
    })
  }

  loadTestCases(pipeline: Pipeline, packageBuild: PackageBuild): void {
    this.getTestCases(pipeline, packageBuild)
    .subscribe(testCases => {
      let action = new LoadTestCasesAction(testCases);
      this.store.dispatch(action);
    })
  }

  private getPipelines(): Observable<Pipeline[]> {
    let url = this.elasticUrl + encodeURIComponent(this.path) + '/_search';
    return this.http.post(url, JSON.stringify(this.pipelineQuery))
    .map(this.extractPipeline)
    .catch(this.handleError);
  }

  private getPackageBuilds(pipeline: Pipeline): Observable<PackageBuild[]> {
    let url = this.elasticUrl + encodeURIComponent(this.path) + '/_search';
    let query = JSON.parse(JSON.stringify(this.packageQuery));
    query.query.match['ci_job.name'] = pipeline.key;
    return this.http.post(url, JSON.stringify(query))
    .map(this.extractPackageBuild)
    .catch(this.handleError);
  }

  private getTestCases(pipeline: Pipeline, packageBuild: PackageBuild) {
    let url = this.elasticUrl + encodeURIComponent(this.path) + '/_search';
    let query = JSON.parse(JSON.stringify(this.testCaseQuery));
    query.query.bool.must[0].match['ci_job.name'] = pipeline.key;
    query.query.bool.must[1].match['ci_job.number'] = packageBuild.key;
    return this.http.post(url, JSON.stringify(query))
    .map(this.extractTestCase)
    .catch(this.handleError);
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

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${err.type} - ${err.reason || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
