import { Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'charts-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.less']
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() data: (string | number)[][];
  chart: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    var lineChartDataColumns = [];

    var c3ChartDefaults = patternfly.c3ChartDefaults();
    var lineChartConfig = c3ChartDefaults.getDefaultLineConfig();
    // lineChartConfig.bindto =  this.el.nativeElement.querySelector('.line-chart-pf');
    lineChartConfig.bindto =  this.el.nativeElement.firstChild;

    lineChartConfig.data = {
      columns: lineChartDataColumns,
      type: 'line'
    };
    lineChartConfig.data.columns = this.data || [];
    this.chart = c3.generate(lineChartConfig);
  }

  ngOnChanges() {
    if (this.chart && this.data) {
      this.chart.load({ columns: this.data });
    }
  }

}
