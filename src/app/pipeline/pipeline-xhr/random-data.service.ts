import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/never';
import 'rxjs/add/observable/from';
import { Pipeline, PackageBuild, TestSuite, TestCase } from '../pipeline.model';

@Injectable()
export class RandomDataService {

  constructor() { }

  public getRandomTestSuite(key): TestSuite {
    let suite = new TestSuite(key);
    let seeds: [string, number, number][] =  [
      ['Passed', 30, 80],
      ['Failed', 5, 30],
      ['Skipped', 5, 10],
      ['Error', 5, 30]
    ];
    suite.testCases = seeds.map(([key, min, max]) => this.getRandomTestCase(key, min, max));
    suite['random'] = true;
    return suite;
  }

  public getRandomTestCase(key: string, min: number = 10, max: number = 20): TestCase {
    return new TestCase(key, this.getRandomInt(min, max));
  }

  private getRandomInt(min, max) {
    //The maximum is exclusive and the minimum is inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
