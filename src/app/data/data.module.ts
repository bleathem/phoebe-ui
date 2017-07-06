import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { ElasticService } from './elastic.service'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ ElasticService ]
})
export class DataModule { }
