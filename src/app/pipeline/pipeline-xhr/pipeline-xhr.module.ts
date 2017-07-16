import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { PipelineXhrService } from './pipeline-xhr.service'
import { RandomDataService } from './random-data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ PipelineXhrService, RandomDataService ]
})
export class PipelineXhrModule { }
