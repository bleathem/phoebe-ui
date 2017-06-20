import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    PieChartComponent,
    LineChartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    PieChartComponent,
    LineChartComponent,
    BarChartComponent
  ],
  providers: []
})
export class ChartsModule { }
