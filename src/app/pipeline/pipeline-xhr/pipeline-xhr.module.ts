import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { PipelineXhrService } from './pipeline-xhr.service'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ PipelineXhrService ]
})
export class PipelineXhrModule { }
