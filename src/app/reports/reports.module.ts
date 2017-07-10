import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from '../charts/charts.module';
import { PipelineModule } from '../pipeline/pipeline.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IntroComponent } from './intro/intro.component';
import { PipelineRunByStageComponent } from './pipeline-run-by-stage/pipeline-run-by-stage.component';
import { TestCaseStatusByPipelineRunComponent } from './test-case-status-by-pipeline-run/test-case-status-by-pipeline-run.component';
import { TestCaseStatusByTestSuiteComponent } from './test-case-status-by-test-suite/test-case-status-by-test-suite.component';
import { TestCaseStatusByTestSuiteBasedOnBuildPackageComponent } from './test-case-status-by-test-suite-based-on-build-package/test-case-status-by-test-suite-based-on-build-package.component';
import { TestSuiteBuildsByTimeComponent } from './test-suite-builds-by-time/test-suite-builds-by-time.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { CollapsiblePanelComponent } from './collapsible-panel/collapsible-panel.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ChartsModule,
    PipelineModule,
    Ng2PageScrollModule.forRoot()
  ],
  declarations: [
    IntroComponent,
    PipelineRunByStageComponent,
    TestCaseStatusByPipelineRunComponent,
    TestCaseStatusByTestSuiteComponent,
    TestCaseStatusByTestSuiteBasedOnBuildPackageComponent,
    TestSuiteBuildsByTimeComponent,
    CollapsiblePanelComponent
  ],
  exports: [
    IntroComponent,
    PipelineRunByStageComponent,
    TestCaseStatusByPipelineRunComponent,
    TestCaseStatusByTestSuiteComponent,
    TestCaseStatusByTestSuiteBasedOnBuildPackageComponent,
    TestSuiteBuildsByTimeComponent
  ]
})
export class ReportsModule { }
