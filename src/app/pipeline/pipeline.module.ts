import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PipelineXhrModule } from './pipeline-xhr/pipeline-xhr.module'

import { PipelineSelectionComponent } from './pipeline-selection/pipeline-selection.component'
import { TestCasesToPieChartPipe } from './to-pie-chart.pipe';
import { TestSuitesToLineChartPipe } from './to-line-chart.pipe';
import { KeySortPipe } from './key-sort.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ PipelineSelectionComponent, TestCasesToPieChartPipe, TestSuitesToLineChartPipe, KeySortPipe ],
  exports: [ PipelineSelectionComponent, TestCasesToPieChartPipe, TestSuitesToLineChartPipe, KeySortPipe ]
})
export class PipelineModule { }
