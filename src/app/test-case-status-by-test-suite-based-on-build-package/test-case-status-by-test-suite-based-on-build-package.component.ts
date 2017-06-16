import { Component, Output, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-test-case-status-by-test-suite-based-on-build-package',
  templateUrl: './test-case-status-by-test-suite-based-on-build-package.component.html',
  styleUrls: ['./test-case-status-by-test-suite-based-on-build-package.component.less']
})
export class TestCaseStatusByTestSuiteBasedOnBuildPackageComponent implements OnInit {
  @Output() chart1Data: (string | number)[][];
  @Output() chart2Data: (string | number)[][];
  @Output() chart3Data: (string | number)[][];
  @Output() chart4Data: (string | number)[][];
  @Output() chart5Data: (string | number)[][];
  @Output() chart6Data: (string | number)[][];

  constructor() { }

  ngOnInit() {
    this.chart2Data = [['Failed', 2],
      ['Skipped', 1],
      ['Passed', 4],
      ['Error', 10]
    ];
    this.chart1Data = [['Failed', 12],
      ['Skipped', 5],
      ['Passed', 1],
      ['Error', 3]
    ];
    this.chart5Data = [['Failed', 1],
      ['Skipped', 8],
      ['Passed', 12],
      ['Error', 3]
    ];
    this.chart3Data = [['Failed', 6],
      ['Skipped', 3],
      ['Passed', 12],
      ['Error', 6]
    ];
    this.chart6Data = [['Failed', 4],
      ['Skipped', 5],
      ['Passed', 14],
      ['Error', 30]
    ];
    this.chart5Data = [['Failed', 2],
      ['Skipped', 15],
      ['Passed', 4],
      ['Error', 13]
    ];
  }

}
