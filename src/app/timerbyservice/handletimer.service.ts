import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandletimerService {
  timerLogSubject = new Subject<string[]>();
  timerLog$ = this.timerLogSubject.asObservable();

  startButtonClickCounterSubject = new BehaviorSubject(0);
  startButtonClickCounter$ = this.startButtonClickCounterSubject.asObservable();

  pauseButtonClickCounterSubject = new BehaviorSubject(0);
  pauseButtonClickCounter$ = this.pauseButtonClickCounterSubject.asObservable();

  startCounter$: number = 0;
  pauseCounter: number = 0;
  private interval;
  constructor() {}

  timerSubject = new BehaviorSubject(0);
  timerCounter$ = this.timerSubject.asObservable();

  setTimerCount(value: number) {
    this.timerSubject.next(value);
  }

  resetCounter() {
    this.timerLogSubject.next([]);
    this.startButtonClickCounterSubject.next(0);
    this.pauseButtonClickCounterSubject.next(0);
    this.timerSubject.next(0);
    this.timerSubject.complete();
  }

  startCountDown(initialValue) {
    let counter = initialValue;
    this.pauseCounDown();
    this.interval = setInterval(() => {
      counter--;
      this.timerSubject.next(counter);
    }, 1000);
  }

  pauseCounDown() {
    clearInterval(this.interval);
  }

  getInterval(): number {
    return this.interval;
  }
}
