import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-test-case-status-by-test-suite',
  templateUrl: './test-case-status-by-test-suite.component.html',
  styleUrls: ['./test-case-status-by-test-suite.component.less']
})
export class TestCaseStatusByTestSuiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var c3ChartDefaults = patternfly.c3ChartDefaults();

    var pieData = {
      type : 'pie',
      colors: {
        Dogs: patternfly.pfPaletteColors.red,
        Cats: patternfly.pfPaletteColors.blue,
        Fish: patternfly.pfPaletteColors.orange,
        Hamsters: patternfly.pfPaletteColors.green
      },
      columns: [
        ['Dogs', 3],
        ['Cats', 2],
        ['Fish', 10],
        ['Hamsters', 2]
      ],
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    };

    // Pie chart
    var pieChart1 = c3ChartDefaults.getDefaultPieConfig();
    pieChart1.bindto = '#pie-chart-1';
    pieChart1.data = pieData;
    pieChart1.legend = {
      show: true,
      position: 'right'
    };
    pieChart1.size = {
      width: 251,
      height: 161
    };
    var pieChartRightLegend = c3.generate(pieChart1);

    // Pie chart
    var pieChart2 = c3ChartDefaults.getDefaultPieConfig();
    pieChart2.bindto = '#pie-chart-2';
    pieChart2.data = pieData;
    pieChart2.legend = {
      show: true,
      position: 'right'
    };
    pieChart2.size = {
      width: 251,
      height: 161
    };
    var pieChartRightLegend = c3.generate(pieChart2);

    // Pie chart
    var pieChart3 = c3ChartDefaults.getDefaultPieConfig();
    pieChart3.bindto = '#pie-chart-3';
    pieChart3.data = pieData;
    pieChart3.legend = {
      show: true,
      position: 'right'
    };
    pieChart3.size = {
      width: 251,
      height: 161
    };
    var pieChartRightLegend = c3.generate(pieChart3);

    // Pie chart
    var pieChart4 = c3ChartDefaults.getDefaultPieConfig();
    pieChart4.bindto = '#pie-chart-4';
    pieChart4.data = pieData;
    pieChart4.legend = {
      show: true,
      position: 'right'
    };
    pieChart4.size = {
      width: 251,
      height: 161
    };
    var pieChartRightLegend = c3.generate(pieChart4);

    // Pie chart
    var pieChart5 = c3ChartDefaults.getDefaultPieConfig();
    pieChart5.bindto = '#pie-chart-5';
    pieChart5.data = pieData;
    pieChart5.legend = {
      show: true,
      position: 'right'
    };
    pieChart5.size = {
      width: 251,
      height: 161
    };
    var pieChartRightLegend = c3.generate(pieChart5);

    // Pie chart
    var pieChart6 = c3ChartDefaults.getDefaultPieConfig();
    pieChart6.bindto = '#pie-chart-6';
    pieChart6.data = pieData;
    pieChart6.legend = {
      show: true,
      position: 'right'
    };
    pieChart6.size = {
      width: 261,
      height: 161
    };
    var pieChartRightLegend = c3.generate(pieChart6);

  }
}
