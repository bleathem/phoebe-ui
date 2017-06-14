import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { PipelineRunByStageComponent } from './pipeline-run-by-stage/pipeline-run-by-stage.component';
import { TestCaseStatusByPipelineRunComponent } from './test-case-status-by-pipeline-run/test-case-status-by-pipeline-run.component';
import { TestCaseStatusByTestSuiteComponent } from './test-case-status-by-test-suite/test-case-status-by-test-suite.component';
import { TestCaseStatusByTestSuiteBasedOnBuildPackageComponent } from './test-case-status-by-test-suite-based-on-build-package/test-case-status-by-test-suite-based-on-build-package.component';
import { TestSuiteBuildsByTimeComponent } from './test-suite-builds-by-time/test-suite-builds-by-time.component';
import { PipelineSelectionComponent } from './pipeline-selection/pipeline-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PipelineRunByStageComponent,
    TestCaseStatusByPipelineRunComponent,
    TestCaseStatusByTestSuiteComponent,
    TestCaseStatusByTestSuiteBasedOnBuildPackageComponent,
    TestSuiteBuildsByTimeComponent,
    PipelineSelectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
