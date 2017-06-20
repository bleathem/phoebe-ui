import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TestCaseStatusService {
  public byTestSuiteObservable: Observable<(string | number)[][]>;
  public byPipelineRunObservable: Observable<(string | number)[][]>;
  public byTimeComponentObservable: Observable<(string | number)[][]>;

  constructor() {
    this.byTestSuiteObservable = new Observable(observer => {
      let delay = this.getRandomInt(100, 500);
      setTimeout(() => {
        observer.next([['Failed', this.getRandomInt(5, 30)],
          ['Skipped', this.getRandomInt(5, 10)],
          ['Passed', this.getRandomInt(30, 80)],
          ['Error', this.getRandomInt(5, 30)]
        ]);
        setInterval(() => {
          observer.next([['Failed', this.getRandomInt(5, 30)],
            ['Skipped', this.getRandomInt(5, 10)],
            ['Passed', this.getRandomInt(30, 80)],
            ['Error', this.getRandomInt(5, 30)]
          ]);
        }, this.getRandomInt(1600, 3200));
      }, delay);
      });

    this.byPipelineRunObservable = new Observable(observer => {
      let delay = this.getRandomInt(100, 500);
      setTimeout(() => {
        observer.next([
          this.getRandomArray('data1', 30, 400, 6),
          this.getRandomArray('data2', 30, 400, 6),
          this.getRandomArray('data3', 30, 400, 6),
          this.getRandomArray('data4', 30, 400, 6),
          this.getRandomArray('data5', 30, 400, 6)
        ]);
        setInterval(() => {
          observer.next([
            this.getRandomArray('data1', 30, 400, 6),
            this.getRandomArray('data2', 30, 400, 6),
            this.getRandomArray('data3', 30, 400, 6),
            this.getRandomArray('data4', 30, 400, 6),
            this.getRandomArray('data5', 30, 400, 6)
          ]);
        }, this.getRandomInt(1600, 3200));
      }, delay);
      });

    this.byTimeComponentObservable = new Observable(observer => {
      let delay = this.getRandomInt(100, 500);
      setTimeout(() => {
        observer.next([
          this.getRandomArray('Passed', 150, 400, 3),
          this.getRandomArray('Failed', 150, 400, 3),
          this.getRandomArray('Skipped', 150, 400, 3),
          this.getRandomArray('Error', 150, 400, 3)
        ]);
        setInterval(() => {
          observer.next([
            this.getRandomArray('Passed', 150, 400, 3),
            this.getRandomArray('Failed', 150, 400, 3),
            this.getRandomArray('Skipped', 150, 400, 3),
            this.getRandomArray('Error', 150, 400, 3)
          ]);
        }, this.getRandomInt(1600, 3200));
      }, delay);
      });
  }

  private getRandomInt(min, max) {
    //The maximum is exclusive and the minimum is inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private getRandomArray(name, min, max, length) {
    let arr: (string | number)[] = [];
    arr[0] = name;
    for (let i=1; i<= length; i++) {
      arr[i] = this.getRandomInt(min, max);
    }
    return arr;
  }
}
