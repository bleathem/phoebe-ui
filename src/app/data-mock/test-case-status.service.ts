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

@Injectable()
export class TestCaseStatusService {
  public byTestSuiteObservable: Observable<(string | number)[][]>;
  public byPipelineRunObservable: Observable<(string | number)[][]>;
  public byTimeComponentObservable: Observable<(string | number)[][]>;
  public pauser: ReplaySubject<boolean>;

  constructor() {
    this.initPauser();

    this.byTestSuiteObservable = this.getRandomDataObservable([
      ['Passed', 30, 80, 1],
      ['Failed', 5, 30, 1],
      ['Skipped', 5, 10, 1],
      ['Error', 5, 30, 1]
    ]);

    this.byPipelineRunObservable = this.getRandomDataObservable([
      ['Passed', 30, 80, 6],
      ['Failed', 5, 30, 6],
      ['Skipped', 5, 10, 6],
      ['Error', 5, 30, 6]
    ]);

    this.byTimeComponentObservable = this.getRandomDataObservable([
      ['Passed', 150, 400, 3],
      ['Failed', 150, 400, 3],
      ['Skipped', 150, 400, 3],
      ['Error', 150, 400, 3]
    ]);
  }

  private initPauser() {
    this.pauser = new ReplaySubject(1);
    this.pauser.next(false);

    let windowFocusObserver = new Observable<boolean>(observer => {
      window.onblur = function() {
        observer.next(false)
        console.log('Window blurred');
      };
      window.onfocus = function() {
        observer.next(true)
        console.log('Window focused');
      };
    });

    windowFocusObserver.subscribe(focused => {
      this.pauser.next(!focused);
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

  private getRandomData(defs: any[][]): (string | number)[][] {
    return defs.map(def => {
      return this.getRandomArray.apply(this, def);
    });
  }

  private getRandomDataObservable(defs: any[][]): Observable<(string | number)[][]> {
    let source = Observable.merge(
      Observable.from([this.getRandomData(defs)]),
      Observable.interval(this.getRandomInt(1600, 3200))
        .map(() => this.getRandomData(defs))
     ).delay(this.getRandomInt(100, 500));
    let pausable = this.pauser.switchMap(paused => paused ? Observable.never() : source);
    return pausable;
  }
}
