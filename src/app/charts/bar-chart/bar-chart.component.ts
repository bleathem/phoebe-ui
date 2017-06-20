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
    var c3ChartDefaults = patternfly.c3ChartDefaults();

    var chartUrls = [
      'https://www.gogole.com',
      'https://www.yahoo.com',
      'https://www.bing.com/',
      'https://duckduckgo.com/'
    ];
    var categories = ['Q1', 'Q2', 'Q3', 'Q4'];
    var columnsData = [
      ['data1', 400, 360, 320, 175]
    ];

    var groupedcCategories = ['2013', '2014', '2015'];
    var groupedColumnsData = [
      ['Passed', 0, 0, 0],
      ['Failed', 0, 0, 0],
      ['Skipped', 0, 0, 0],
      ['Error', 0, 0, 0]
    ];
    var groupedColors = {
      pattern: [
        patternfly.pfPaletteColors.red,
        patternfly.pfPaletteColors.blue,
        patternfly.pfPaletteColors.orange,
        patternfly.pfPaletteColors.green
      ]
    };

    var groupedVerticalBarChartConfig = patternfly.c3ChartDefaults().getDefaultGroupedBarConfig();
    groupedVerticalBarChartConfig.bindto = '#bar-chart-6';
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
