import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TestCaseStatusService {
  public data: Observable<(string | number)[][]>;

  constructor() {
    this.data = new Observable(observer => {
      let delay = this.getRandomInt(100, 500);
      setTimeout(() => {
        setInterval(() => {
          observer.next([['Failed', this.getRandomInt(5, 30)],
            ['Skipped', this.getRandomInt(5, 10)],
            ['Passed', this.getRandomInt(30, 80)],
            ['Error', this.getRandomInt(5, 30)]
          ]);
        }, this.getRandomInt(800, 1000));
      }, delay);
      });
  }

  private getRandomInt(min, max) {
    //The maximum is exclusive and the minimum is inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
