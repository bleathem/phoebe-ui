import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';
import { Pipeline } from '../pipeline.model';

import { LOAD_PIPELINES } from '../pipeline.actions'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PipelineXhrService {
  private elasticUrl = 'http://elasticsearch.perf.lab.eng.bos.redhat.com/';
  private path = '<jenkins-staging2-logs-{now/d-2d}>,<jenkins-staging2-logs-{now/d-1d}>,<jenkins-staging2-logs-{now/d}>,';
  private query = {
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
  }

  constructor (private http: Http, private store: Store<AppStore>) {}

  loadPackages(): void {
    this.getPackages()
    .subscribe(pipelines => {
      let action = { type: LOAD_PIPELINES, payload: pipelines };
      this.store.dispatch(action);
    })
  }

  private getPackages(): Observable<string[]> {
    let url = this.elasticUrl + encodeURIComponent(this.path) + '/_search';
    return this.http.post(url, JSON.stringify(this.query))
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    // console.log(JSON.stringify(body, null, 2));
    return body.aggregations.job_list.buckets
    .map(bucket => {
      return new Pipeline(bucket.key, bucket.doc_count);
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
