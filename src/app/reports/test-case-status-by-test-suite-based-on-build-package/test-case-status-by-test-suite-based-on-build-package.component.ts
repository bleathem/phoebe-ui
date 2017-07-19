import { Component, Input, Output, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';
import { TestCase, TestSuite } from '../../pipeline/pipeline.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-test-case-status-by-test-suite-based-on-build-package',
  templateUrl: './test-case-status-by-test-suite-based-on-build-package.component.html',
  styleUrls: ['./test-case-status-by-test-suite-based-on-build-package.component.less']
})
export class TestCaseStatusByTestSuiteBasedOnBuildPackageComponent implements OnInit {
  @Input() hideDetails = true;
  @Input() testSuites: Observable<TestSuite[]>;

  constructor(private store: Store<AppStore>) {
    this.testSuites = store
    .select(state => state.pipelineReducer.selectedPackageBuild && state.pipelineReducer.selectedPackageBuild.testSuites);
  }

  ngOnInit() { }

}
