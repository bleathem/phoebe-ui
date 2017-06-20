import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    PieChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    PieChartComponent,
    LineChartComponent
  ],
  providers: []
})
export class ChartsModule { }
