import { Component, Input, Output, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { TestCaseStatusService } from '../../data-mock/test-case-status.service'
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';
import { TestCase, TestSuite } from '../../pipeline/pipeline.model';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-test-case-status-by-test-suite',
  templateUrl: './test-case-status-by-test-suite.component.html',
  styleUrls: ['./test-case-status-by-test-suite.component.less']
})
export class TestCaseStatusByTestSuiteComponent implements OnInit {
  @Input() hideDetails: boolean = true;

  // [["Failed", 24],["Skipped",8],["Passed",76],["Error",19]]
  @Output() testSuites: TestSuite[];

  constructor(private store: Store<AppStore>, private testCaseStatusService: TestCaseStatusService) {
    this.store.select(store => store.pipelineReducer.testSuites)
    .filter(state => !!state)
    .subscribe(state => {
      this.testSuites = state;
    });
  }

  ngOnInit() {
  }
}
