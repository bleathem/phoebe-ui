import { Pipe, PipeTransform } from '@angular/core';
import { PackageBuild, TestCase, TestSuite } from './pipeline.model';

@Pipe({name: 'testSuitesToLineChart'})
export class TestSuitesToLineChartPipe implements PipeTransform {
  transform(packageBuilds: PackageBuild[]): (string | number)[][] {
    if (!packageBuilds) {
      return [];
    }
    let x: (string | number)[] = ['x'];
    let lines = {};
    packageBuilds
    .filter(packageBuild => packageBuild.testSuites && packageBuild.testSuites.length)
    .map(packageBuild => {
      x.push(packageBuild.key);
      packageBuild.testSuites.forEach(testSuite => {
        testSuite.testCases.forEach(testCase => {
          lines[testCase.key] = lines[testCase.key] || [];
          lines[testCase.key].push(testCase.count);
        });
      });
    });
    let chartData = [];
    if (!Object.keys(lines).length) {
      return [];
    }
    chartData.push(x);
    Object.keys(lines).forEach(key => {
      let line = [key];
      line = line.concat(lines[key]);
      chartData.push(line);
    })
    // console.log(JSON.stringify(chartData, null, 2));
    return chartData;
  }
}
