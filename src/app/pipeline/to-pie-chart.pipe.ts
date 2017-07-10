import { Pipe, PipeTransform } from '@angular/core';
import { TestCase } from './pipeline.model';

@Pipe({name: 'testCasesToPieChart'})
export class TestCasesToPieChartPipe implements PipeTransform {
  transform(testCases: TestCase[]): (string | number)[][] {
    if (!testCases) {
      return [];
    }
    let pieChartData = testCases.map(testCase => {
      return [testCase.key, testCase.count];
    });
    return pieChartData;
  }
}
