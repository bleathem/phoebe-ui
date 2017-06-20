import { Component, Input, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-test-case-status-by-pipeline-run',
  templateUrl: './test-case-status-by-pipeline-run.component.html',
  styleUrls: ['./test-case-status-by-pipeline-run.component.less']
})
export class TestCaseStatusByPipelineRunComponent implements OnInit {
  @Input() hideDetails: boolean = true;

  constructor() { }

  ngOnInit() {
    var lineChartDataColumns = [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 220, 310, 240, 115, 25],
      ['data3', 70, 100, 390, 295, 170, 220],
      ['data4', 10, 340, 30, 290, 35, 20],
      ['data5', 90, 150, 160, 165, 180, 5]
    ];
    var singleLineChartDataColumns = [
      ['data1', 30, 200, 100, 400, 150, 250]
    ];

    var c3ChartDefaults = patternfly.c3ChartDefaults();
    var lineChartConfig = c3ChartDefaults.getDefaultLineConfig();
    lineChartConfig.bindto = '#line-chart-3';
    lineChartConfig.data = {
      columns: lineChartDataColumns,
      type: 'line'
    };
    var lineChart = c3.generate(lineChartConfig);
  }

}
