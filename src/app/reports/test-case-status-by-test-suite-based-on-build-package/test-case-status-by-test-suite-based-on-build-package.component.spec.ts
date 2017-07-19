import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsModule } from '../../charts/charts.module';
import { PipelineModule } from '../../pipeline/pipeline.module';
import { TestCaseStatusByTestSuiteBasedOnBuildPackageComponent } from './test-case-status-by-test-suite-based-on-build-package.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapsiblePanelComponent } from '../collapsible-panel/collapsible-panel.component';
import { StoreModule } from '@ngrx/store';

import { pipelineReducer } from '../../pipeline/pipeline.reducer';

describe('TestCaseStatusByTestSuiteBasedOnBuildPackageComponent', () => {
  let component: TestCaseStatusByTestSuiteBasedOnBuildPackageComponent;
  let fixture: ComponentFixture<TestCaseStatusByTestSuiteBasedOnBuildPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCaseStatusByTestSuiteBasedOnBuildPackageComponent, CollapsiblePanelComponent ],
      imports: [ PipelineModule, BrowserAnimationsModule, ChartsModule, StoreModule.provideStore({
        pipelineReducer
      }) ]
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
