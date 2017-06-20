import { Component, Input, OnInit, ElementRef, OnChanges } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'charts-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.less']
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() data: (string | number)[][];
  chart: any;

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
    let pieChartConfig = c3ChartDefaults.getDefaultPieConfig();
    pieChartConfig.bindto = this.el.nativeElement;
    pieChartConfig.data = pieData;
    pieChartConfig.legend = {
      show: true,
      position: 'right'
    };
    pieChartConfig.size = {
      width: 251,
      height: 161
    };

    pieChartConfig.data.columns = this.data || [['Failed', 0],
      ['Skipped', 0],
      ['Passed', 0],
      ['Error', 0]
    ];
    this.chart = c3.generate(pieChartConfig);
  }

  ngOnChanges() {
    if (this.chart && this.data) {
      this.chart.load({ columns: this.data });
    }
  }
}
