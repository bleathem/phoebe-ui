import { Component, Input, OnInit, ElementRef } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'charts-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.less']
})
export class PieChartComponent implements OnInit {
  @Input() data: (string | number)[][];

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
    pieData.columns = this.data || [['Failed', 2],
      ['Skipped', 1],
      ['Passed', 4],
      ['Error', 10]
    ];

    // Pie chart
    var pieChart1 = c3ChartDefaults.getDefaultPieConfig();
    pieChart1.bindto = this.el.nativeElement;
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
  }

}
