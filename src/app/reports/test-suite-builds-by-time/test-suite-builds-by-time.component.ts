import { Component, Input, Output, OnInit } from '@angular/core';
import { TestCaseStatusService } from '../../data-mock/test-case-status.service'

@Component({
  selector: 'app-test-suite-builds-by-time',
  templateUrl: './test-suite-builds-by-time.component.html',
  styleUrls: ['./test-suite-builds-by-time.component.less']
})
export class TestSuiteBuildsByTimeComponent implements OnInit {
  @Input() hideDetails = true;
  @Output() chartData: (string | number)[][];

  constructor(private testCaseStatusService: TestCaseStatusService) { }

  ngOnInit() {
    this.testCaseStatusService.byTimeComponentObservable.subscribe(data => this.chartData = data);
  }
}
