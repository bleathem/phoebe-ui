import { Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'charts-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.less']
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() data: (string | number)[][];
  chart: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    const c3ChartDefaults = patternfly.c3ChartDefaults();

    const groupedcCategories = ['2013', '2014', '2015'];
    const groupedColumnsData = [
      ['Passed', 0, 0, 0],
      ['Failed', 0, 0, 0],
      ['Skipped', 0, 0, 0],
      ['Error', 0, 0, 0]
    ];
    const groupedColors = {
      pattern: [
        patternfly.pfPaletteColors.red,
        patternfly.pfPaletteColors.blue,
        patternfly.pfPaletteColors.orange,
        patternfly.pfPaletteColors.green
      ]
    };

    const groupedVerticalBarChartConfig = patternfly.c3ChartDefaults().getDefaultGroupedBarConfig();
    groupedVerticalBarChartConfig.bindto = this.el.nativeElement.firstChild;
    groupedVerticalBarChartConfig.axis = {
      x: {
        categories: groupedcCategories,
        columns: groupedColumnsData,
        type: 'category'
      }
    };
    groupedVerticalBarChartConfig.data = {
      type: 'bar',
      columns: [],
      // optional drilldown behavior
      onclick: function (d, element) {
        // window.location = chartUrls[d.index];
      }
    };
    groupedVerticalBarChartConfig.color = groupedColors;
    groupedVerticalBarChartConfig.legend = {
      show: true,
      position: 'right'
    };
    this.chart = c3.generate(groupedVerticalBarChartConfig);
  }

  ngOnChanges() {
    if (this.chart && this.data) {
      this.chart.load({ columns: this.data });
    }
  }

}
