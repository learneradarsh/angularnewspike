import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandletimerService {

  timerLogSubject = new Subject();
  timerLog$ = this.timerLogSubject.asObservable();

  startButtonClickCounterSubject = new BehaviorSubject(0);
  startButtonClickCounter$ = this.startButtonClickCounterSubject.asObservable();

  pauseButtonClickCounterSubject = new BehaviorSubject(0);
  pauseButtonClickCounter$ = this.pauseButtonClickCounterSubject.asObservable();

  startCounter$: number = 0;
  pauseCounter: number = 0;
  constructor() {}

  timerSubject = new BehaviorSubject(0);
  timerCounter$ = this.timerSubject.asObservable();

  setTimerCount(value: number) {
    this.timerSubject.next(this.startCountdown(value));
  }

  private startCountdown(initialValue) {
    let counter = initialValue;

    const interval = setInterval(() => {
      console.log(counter);
      counter--;
    }, 1000);

    return counter;
  }
}
