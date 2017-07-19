import { Component, Input, Output, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';
import { PackageBuild, TestCase, TestSuite } from '../../pipeline/pipeline.model';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/zip';


@Component({
  selector: 'app-test-case-status-by-pipeline-run',
  templateUrl: './test-case-status-by-pipeline-run.component.html',
  styleUrls: ['./test-case-status-by-pipeline-run.component.less']
})
export class TestCaseStatusByPipelineRunComponent implements OnInit {
  @Input() public hideDetails = true;
  @Input() public chartData: Observable<PackageBuild[]>;
  dataLoaded: Subject<any> = new Subject();

  constructor(private store: Store<AppStore>) {
    const chartData = store
    .select(state => state.pipelineReducer.selectedPipeline && state.pipelineReducer.selectedPipeline.packageBuilds)
    .filter(state => !!state)
    .debounceTime(50);

    // This zip blocks new data uploads until the previous data load is done
    this.chartData = Observable.zip(
      chartData,
      this.dataLoaded,
      (data, done) => data
    );
  }

  public onDataLoaded(event) {
    setTimeout(() => {
      this.dataLoaded.next();
    })
  }

  ngOnInit() {
    this.dataLoaded.next();
  }

}
