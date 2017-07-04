import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsModule } from '../../charts/charts.module';
import { DataMockModule } from '../../data-mock/data-mock.module';
import { TestCaseStatusByPipelineRunComponent } from './test-case-status-by-pipeline-run.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapsiblePanelComponent } from '../collapsible-panel/collapsible-panel.component';

describe('TestCaseStatusByPipelineRunComponent', () => {
  let component: TestCaseStatusByPipelineRunComponent;
  let fixture: ComponentFixture<TestCaseStatusByPipelineRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCaseStatusByPipelineRunComponent, CollapsiblePanelComponent ],
      imports: [ BrowserAnimationsModule, ChartsModule, DataMockModule ]
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
