import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineXhrModule } from './pipeline-xhr/pipeline-xhr.module'

import { PipelineSelectionComponent } from './pipeline-selection/pipeline-selection.component'
import { TestCasesToPieChartPipe } from './to-pie-chart.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ PipelineSelectionComponent, TestCasesToPieChartPipe ],
  exports: [ PipelineSelectionComponent, TestCasesToPieChartPipe ]
})
export class PipelineModule { }
