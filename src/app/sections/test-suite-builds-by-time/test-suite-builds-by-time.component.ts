import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-test-suite-builds-by-time',
  templateUrl: './test-suite-builds-by-time.component.html',
  styleUrls: ['./test-suite-builds-by-time.component.less']
})
export class TestSuiteBuildsByTimeComponent implements OnInit {

  constructor() { }

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
    ['Passed', 400, 250, 375],
    ['Failed', 355, 305, 300],
    ['Skipped', 315, 340, 276],
    ['Error', 180, 390, 190]
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
      type: 'category'
    }
  };
  groupedVerticalBarChartConfig.data = {
    type: 'bar',
    columns: groupedColumnsData,
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
  var groupedVerticalBarChart = c3.generate(groupedVerticalBarChartConfig);
  }

}
