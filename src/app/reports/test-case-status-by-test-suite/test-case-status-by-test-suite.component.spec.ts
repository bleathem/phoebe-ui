import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsModule } from '../../charts/charts.module';
import { DataMockModule } from '../../data-mock/data-mock.module';
import { TestCaseStatusByTestSuiteComponent } from './test-case-status-by-test-suite.component';

describe('TestCaseStatusByTestSuiteComponent', () => {
  let component: TestCaseStatusByTestSuiteComponent;
  let fixture: ComponentFixture<TestCaseStatusByTestSuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCaseStatusByTestSuiteComponent ],
      imports: [ ChartsModule, DataMockModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseStatusByTestSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
