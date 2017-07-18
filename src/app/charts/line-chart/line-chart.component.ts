import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as c3 from 'c3';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/skipUntil';

@Component({
  selector: 'charts-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.less']
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() data: (string | number)[][];
  @Input() dataStream: Observable<(string | number)[][]>;
  chart: any;
  subscription: Subscription;
  dataEvents: Subject<(string | number)[][]>;
  doneEvents: Subject<any>;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    var lineChartDataColumns = [];

    var c3ChartDefaults = patternfly.c3ChartDefaults();
    var lineChartConfig = c3ChartDefaults.getDefaultLineConfig();
    // lineChartConfig.bindto =  this.el.nativeElement.querySelector('.line-chart-pf');
    lineChartConfig.bindto =  this.el.nativeElement.firstChild;

    lineChartConfig.data = {
      columns: lineChartDataColumns,
      type: 'line',
      x: 'x',
      colors: {
        Failure: patternfly.pfPaletteColors.red,
        Skipped: patternfly.pfPaletteColors.purple,
        Passed: patternfly.pfPaletteColors.orange,
        Successful: patternfly.pfPaletteColors.blue,
        Error: patternfly.pfPaletteColors.green
      },
    };
    lineChartConfig.data.columns = this.data || [];
    this.chart = c3.generate(lineChartConfig);
    this.dataEvents = new Subject();
    this.doneEvents = new Subject();
    Observable.zip(
      this.dataEvents,
      this.doneEvents,
      (data, done) => data
    )
    .subscribe(data => {
      this.chart.load({ columns: data, unload: true, done: () => {this.doneEvents.next()} });
    });
    this.doneEvents.next();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart && changes.data) {
      this.dataEvents.next(changes.data.currentValue);
    }
  }

}
