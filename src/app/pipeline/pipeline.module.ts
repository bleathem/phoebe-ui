import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineXhrModule } from './pipeline-xhr/pipeline-xhr.module'

import { PipelineSelectionComponent } from './pipeline-selection/pipeline-selection.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ PipelineSelectionComponent ],
  exports: [ PipelineSelectionComponent ]
})
export class PipelineModule { }
