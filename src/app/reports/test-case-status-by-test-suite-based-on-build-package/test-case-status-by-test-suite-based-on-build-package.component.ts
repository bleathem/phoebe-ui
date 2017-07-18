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
  @Input() hideDetails: boolean = true;
  @Input() testSuites: Observable<TestSuite[]>;

  constructor(private store: Store<AppStore>) {
    this.testSuites = store
    .select(store => store.pipelineReducer.selectedPackageBuild && store.pipelineReducer.selectedPackageBuild.testSuites);
  }

  ngOnInit() { }

}
