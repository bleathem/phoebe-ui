import { Component, OnInit, ElementRef } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'charts-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.less']
})
export class PieChartComponent implements OnInit {

  constructor(private el: ElementRef) {
  }

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
