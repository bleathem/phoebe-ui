import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsModule } from '../../charts/charts.module';
import { PipelineModule } from '../../pipeline/pipeline.module';
import { TestCaseStatusByPipelineRunComponent } from './test-case-status-by-pipeline-run.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapsiblePanelComponent } from '../collapsible-panel/collapsible-panel.component';
import { StoreModule } from '@ngrx/store';

import { pipelineReducer } from '../../pipeline/pipeline.reducer'

describe('TestCaseStatusByPipelineRunComponent', () => {
  let component: TestCaseStatusByPipelineRunComponent;
  let fixture: ComponentFixture<TestCaseStatusByPipelineRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCaseStatusByPipelineRunComponent, CollapsiblePanelComponent ],
      imports: [ PipelineModule, BrowserAnimationsModule, ChartsModule, StoreModule.provideStore({
        pipelineReducer
      }) ]
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
