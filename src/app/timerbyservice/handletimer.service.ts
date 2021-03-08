import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandletimerService {

  constructor() { }

  timerSubject = new BehaviorSubject(0);
  timerCounter$ = this.timerSubject.asObservable();

  
  setTimerCount(value: number) {
    this.timerSubject.next(value);
  }
}
