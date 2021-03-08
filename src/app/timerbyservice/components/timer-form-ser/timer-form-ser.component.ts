import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { HandletimerService } from '../../handletimer.service';

@Component({
  selector: 'app-timer-form-ser',
  templateUrl: './timer-form-ser.component.html',
  styleUrls: ['./timer-form-ser.component.scss'],
})
export class TimerFormSerComponent implements OnInit, OnDestroy {
  @ViewChild('#counterForm') counterForm: any;

  isStart: boolean = true;
  timerCount: number;

  startButtonClickCount = 0;
  pauseButtonClickCount = 0;

  timerLog: string[] = [];
  pausedLogList: string[] = [];

  subscription: Subscription;
  constructor(private handleTimerService: HandletimerService) {}

  ngOnInit(): void {
    this.subscription = this.handleTimerService.timerCounter$.subscribe(count => {
      this.timerCount = count;
    });
  }

  handleTimer(el: any) {
    if (this.isStart) {
      this.startButtonClickCount++;
      this.timerLog.push(`Started at ${new Date()}`);
      this.handleTimerService.startButtonClickCounterSubject.next(
        this.startButtonClickCount
      );
      this.handleTimerService.timerLogSubject.next(this.timerLog);
      this.handleTimerService.startCountDown(el.value);
      this.isStart = !this.isStart;
    } else {
      this.pauseButtonClickCount++;
      this.timerLog.push(`Paused at ${new Date()}`);
      this.pausedLogList.push(`Paused at ${this.timerCount}`)
      this.handleTimerService.pauseButtonClickCounterSubject.next(
        this.pauseButtonClickCount
      );
      this.handleTimerService.timerLogSubject.next(this.timerLog);
      // this.handleTimerService.pauseCounDown();
      this.isStart = !this.isStart;
    }
  }

  reset(timerInputRef: any) {
    this.handleTimerService.resetCounter();
    this.pausedLogList = [];
    this.handleTimerService.pauseCounDown();
    timerInputRef.value = "";
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
