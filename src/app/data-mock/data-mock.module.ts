import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCaseStatusService } from './test-case-status.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ TestCaseStatusService ]
})
export class DataMockModule { }
