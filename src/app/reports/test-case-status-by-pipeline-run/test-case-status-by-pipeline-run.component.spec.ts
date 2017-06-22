import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsModule } from '../../charts/charts.module';
import { DataMockModule } from '../../data-mock/data-mock.module';
import { TestCaseStatusByPipelineRunComponent } from './test-case-status-by-pipeline-run.component';

describe('TestCaseStatusByPipelineRunComponent', () => {
  let component: TestCaseStatusByPipelineRunComponent;
  let fixture: ComponentFixture<TestCaseStatusByPipelineRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCaseStatusByPipelineRunComponent ],
      imports: [ ChartsModule, DataMockModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseStatusByPipelineRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
