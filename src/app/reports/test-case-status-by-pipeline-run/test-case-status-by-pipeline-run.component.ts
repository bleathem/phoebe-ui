import { Component, Input, Output, OnInit } from '@angular/core';
import { TestCaseStatusService } from '../../data-mock/test-case-status.service'
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';
import { PackageBuild, TestCase, TestSuite } from '../../pipeline/pipeline.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-test-case-status-by-pipeline-run',
  templateUrl: './test-case-status-by-pipeline-run.component.html',
  styleUrls: ['./test-case-status-by-pipeline-run.component.less']
})
export class TestCaseStatusByPipelineRunComponent implements OnInit {
  @Input() hideDetails: boolean = true;
  @Input() chartData: Observable<PackageBuild[]>;

  constructor(private testCaseStatusService: TestCaseStatusService, private store: Store<AppStore>) {
    // this.chartData = this.testCaseStatusService.byPipelineRunObservable.map(data => [['x', 246, 247, 248, 250, 251, 252]].concat(data));
    this.chartData = store
    .select(store => store.pipelineReducer.selectedPipeline && store.pipelineReducer.selectedPipeline.packageBuilds)
    .filter(state => !!state);
  }

  ngOnInit() {
  }

}
