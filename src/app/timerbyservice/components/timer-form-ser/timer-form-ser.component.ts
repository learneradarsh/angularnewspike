import { Component, OnInit } from '@angular/core';
import { HandletimerService } from '../../handletimer.service';

@Component({
  selector: 'app-timer-form-ser',
  templateUrl: './timer-form-ser.component.html',
  styleUrls: ['./timer-form-ser.component.scss']
})
export class TimerFormSerComponent implements OnInit {

  isStart: boolean = true;

  startButtonClickCount = 0;
  pauseButtonClickCount = 0;

  timerLog: string[] = [];
  constructor(private handleTimerService: HandletimerService) { }

  ngOnInit(): void {
  }

  handleTimer(el: any) {
    if(this.isStart) {
      this.startButtonClickCount++;
      this.timerLog.push(`Started at ${new Date()}`);
      this.handleTimerService.startButtonClickCounterSubject.next(this.startButtonClickCount);
      this.handleTimerService.timerLogSubject.next(this.timerLog);
      this.isStart = !this.isStart;
    } else {
      this.pauseButtonClickCount++;
      this.timerLog.push(`Paused at ${new Date()}`);
      this.handleTimerService.pauseButtonClickCounterSubject.next(this.pauseButtonClickCount);
      this.handleTimerService.timerLogSubject.next(this.timerLog);
      this.isStart = !this.isStart;
    }
    this.handleTimerService.setTimerCount(el.value); 
  }
}
