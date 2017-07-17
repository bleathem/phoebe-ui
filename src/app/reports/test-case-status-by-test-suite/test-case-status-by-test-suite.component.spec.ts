import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsModule } from '../../charts/charts.module';
import { PipelineModule } from '../../pipeline/pipeline.module';
import { DataMockModule } from '../../data-mock/data-mock.module';
import { TestCaseStatusByTestSuiteComponent } from './test-case-status-by-test-suite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapsiblePanelComponent } from '../collapsible-panel/collapsible-panel.component';
import { StoreModule } from '@ngrx/store';

import { pipelineReducer } from '../../pipeline/pipeline.reducer'

describe('TestCaseStatusByTestSuiteComponent', () => {
  let component: TestCaseStatusByTestSuiteComponent;
  let fixture: ComponentFixture<TestCaseStatusByTestSuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCaseStatusByTestSuiteComponent, CollapsiblePanelComponent ],
      imports: [ BrowserAnimationsModule, ChartsModule, DataMockModule, PipelineModule, StoreModule.provideStore({
        pipelineReducer
      }) ]
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
