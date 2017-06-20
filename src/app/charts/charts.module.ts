import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    PieChartComponent
  ],
  providers: []
})
export class ChartsModule { }
