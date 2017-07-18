import { Component, Input, Output, OnInit } from '@angular/core';
import { TestCaseStatusService } from '../../data-mock/test-case-status.service'
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';
import { PackageBuild, TestCase, TestSuite } from '../../pipeline/pipeline.model';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/zip';


@Component({
  selector: 'app-test-case-status-by-pipeline-run',
  templateUrl: './test-case-status-by-pipeline-run.component.html',
  styleUrls: ['./test-case-status-by-pipeline-run.component.less']
})
export class TestCaseStatusByPipelineRunComponent implements OnInit {
  @Input() hideDetails: boolean = true;
  @Input() chartData: Observable<PackageBuild[]>;
  dataLoaded: Subject<any> = new Subject();

  constructor(private testCaseStatusService: TestCaseStatusService, private store: Store<AppStore>) {
    let chartData = store
    .select(store => store.pipelineReducer.selectedPipeline && store.pipelineReducer.selectedPipeline.packageBuilds)
    .filter(state => !!state);

    this.chartData = Observable.zip(
      chartData,
      this.dataLoaded,
      (data, done) => data
    );
  }

  onDataLoaded() {
    setTimeout(() => {
      this.dataLoaded.next();
    })
  }

  ngOnInit() {
    this.dataLoaded.next();
  }

}
