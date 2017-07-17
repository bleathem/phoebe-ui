import { Component, Input, Output, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';
import { TestCase, TestSuite } from '../../pipeline/pipeline.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-test-case-status-by-test-suite',
  templateUrl: './test-case-status-by-test-suite.component.html',
  styleUrls: ['./test-case-status-by-test-suite.component.less']
})
export class TestCaseStatusByTestSuiteComponent implements OnInit {
  @Input() hideDetails: boolean = true;

  @Input() testSuites: Observable<TestSuite[]>;

  constructor(private store: Store<AppStore>) {
    this.testSuites = store.select(store => store.pipelineReducer.testSuites)
    .filter(state => !!state)
  }

  ngOnInit() {
  }
}
