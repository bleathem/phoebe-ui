import { Component, ElementRef, Input, Output, OnChanges, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'charts-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.less']
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() data: (string | number)[][];
  @Output() dataLoaded: EventEmitter<any> = new EventEmitter();
  chart: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    var lineChartDataColumns = [];

    var c3ChartDefaults = patternfly.c3ChartDefaults();
    var lineChartConfig = c3ChartDefaults.getDefaultLineConfig();
    // lineChartConfig.bindto =  this.el.nativeElement.querySelector('.line-chart-pf');
    lineChartConfig.bindto =  this.el.nativeElement.firstChild;

    lineChartConfig.data = {
      columns: lineChartDataColumns,
      type: 'line',
      x: 'x',
      colors: {
        Failure: patternfly.pfPaletteColors.red,
        Skipped: patternfly.pfPaletteColors.purple,
        Passed: patternfly.pfPaletteColors.orange,
        Successful: patternfly.pfPaletteColors.blue,
        Error: patternfly.pfPaletteColors.green
      },
    };
    lineChartConfig.data.columns = this.data || [];
    this.chart = c3.generate(lineChartConfig);

    this.dataLoaded.next();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart && changes.data) {
      this.chart.load({ columns: changes.data.currentValue, unload: true, done: () => {this.dataLoaded.next()} });
    }
  }

}
