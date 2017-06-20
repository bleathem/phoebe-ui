import { Component, Input, Output, OnInit } from '@angular/core';
import { TestCaseStatusService } from '../../data-mock/test-case-status.service'

@Component({
  selector: 'app-test-case-status-by-pipeline-run',
  templateUrl: './test-case-status-by-pipeline-run.component.html',
  styleUrls: ['./test-case-status-by-pipeline-run.component.less']
})
export class TestCaseStatusByPipelineRunComponent implements OnInit {
  @Input() hideDetails: boolean = true;
  @Output() chartData: (string | number)[][];

  constructor(private testCaseStatusService: TestCaseStatusService) { }

  ngOnInit() {
    this.testCaseStatusService.byPipelineRunObservable.subscribe(data => this.chartData = data);
  }

}
