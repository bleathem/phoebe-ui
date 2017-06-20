import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseStatusByTestSuiteBasedOnBuildPackageComponent } from './test-case-status-by-test-suite-based-on-build-package.component';

describe('TestCaseStatusByTestSuiteBasedOnBuildPackageComponent', () => {
  let component: TestCaseStatusByTestSuiteBasedOnBuildPackageComponent;
  let fixture: ComponentFixture<TestCaseStatusByTestSuiteBasedOnBuildPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCaseStatusByTestSuiteBasedOnBuildPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseStatusByTestSuiteBasedOnBuildPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
