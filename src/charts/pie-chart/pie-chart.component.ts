import { Component, Input, OnInit, ElementRef, OnChanges } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'charts-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.less']
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() data: (string | number)[][];
  pieChart: any;
  initialized: boolean = false;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    var c3ChartDefaults = patternfly.c3ChartDefaults();

    var pieData = {
      type : 'pie',
      colors: {
        Failed: patternfly.pfPaletteColors.red,
        Skipped: patternfly.pfPaletteColors.blue,
        Passed: patternfly.pfPaletteColors.orange,
        Error: patternfly.pfPaletteColors.green
      },
      columns: null,
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    };

    // Pie chart
    this.pieChart = c3ChartDefaults.getDefaultPieConfig();
    this.pieChart.bindto = this.el.nativeElement;
    this.pieChart.data = pieData;
    this.pieChart.legend = {
      show: true,
      position: 'right'
    };
    this.pieChart.size = {
      width: 251,
      height: 161
    };

    this.pieChart.data.columns = this.data || [['Failed', 0],
      ['Skipped', 0],
      ['Passed', 0],
      ['Error', 0]
    ];
    var pieChartRightLegend = c3.generate(this.pieChart);
    this.initialized = true;
  }

  ngOnChanges() {
    if (this.initialized && this.data) {
      this.pieChart.data.columns = this.data;
      var pieChartRightLegend = c3.generate(this.pieChart);
    }
  }
}
