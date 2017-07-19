import { Component, Input, Output, OnInit } from '@angular/core';
import { RandomDataService } from '../../pipeline/pipeline-xhr/random-data.service';
import { Observable } from 'rxjs/Observable';
import { Pipeline, PackageBuild, TestSuite, TestCase } from '../../pipeline/pipeline.model';

@Component({
  selector: 'app-test-suite-builds-by-time',
  templateUrl: './test-suite-builds-by-time.component.html',
  styleUrls: ['./test-suite-builds-by-time.component.less']
})
export class TestSuiteBuildsByTimeComponent implements OnInit {
  @Input() hideDetails = true;
  @Input() public chartData: (string | number)[][];

  constructor(private randomDataService: RandomDataService) { }

  ngOnInit() {
    const data = [
      this.randomDataService.getRandomTestSuite('Random Data 1'),
      this.randomDataService.getRandomTestSuite('Random Data'),
      this.randomDataService.getRandomTestSuite('Random Data')
    ]
    .reduce((data, suite) => {
      suite.testCases.forEach(testCase => {
        data[testCase.key] = data[testCase.key] || [];
        data[testCase.key].push(testCase.count);
      })
      return data;
    }, {});
    setTimeout(() => {
      this.chartData = Object.keys(data).map(key => {
        return [key].concat(data[key]);
      })
    })
  }
}
