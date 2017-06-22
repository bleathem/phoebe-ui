import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsModule } from '../../charts/charts.module';
import { DataMockModule } from '../../data-mock/data-mock.module';
import { TestCaseStatusByTestSuiteBasedOnBuildPackageComponent } from './test-case-status-by-test-suite-based-on-build-package.component';

describe('TestCaseStatusByTestSuiteBasedOnBuildPackageComponent', () => {
  let component: TestCaseStatusByTestSuiteBasedOnBuildPackageComponent;
  let fixture: ComponentFixture<TestCaseStatusByTestSuiteBasedOnBuildPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCaseStatusByTestSuiteBasedOnBuildPackageComponent ],
      imports: [ ChartsModule, DataMockModule ]
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
