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
    const lineChartDataColumns = [];

    const c3ChartDefaults = patternfly.c3ChartDefaults();
    const lineChartConfig = c3ChartDefaults.getDefaultLineConfig();
    // lineChartConfig.bindto =  this.el.nativeElement.querySelector('.line-chart-pf');
    lineChartConfig.bindto =  this.el.nativeElement.firstChild;

    lineChartConfig.data = {
      columns: lineChartDataColumns,
      type: 'line',
      x: 'x',
      colors: {
        Successful: patternfly.pfPaletteColors.blue,
        Passed: patternfly.pfPaletteColors.blue200,
        Failure: patternfly.pfPaletteColors.red,
        Failed: patternfly.pfPaletteColors.red,
        Error: patternfly.pfPaletteColors.orange,
        Skipped: patternfly.pfPaletteColors.purple,
        'Not started': patternfly.pfPaletteColors.purple100,
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
