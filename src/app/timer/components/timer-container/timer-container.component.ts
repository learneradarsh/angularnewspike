import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss'],
})
export class TimerContainerComponent implements OnInit{
  isStart: boolean = true;
  startButtonClickCount = 0;
  pauseButtonClickCount = 0;
  timerLog: string[] = [];
  interval;
  liveCounter: number = 0;
  constructor() {}

  ngOnInit(): void {}

  startCounter(initialValue) {
    this.liveCounter = initialValue;
    this.interval = setInterval(() => {
      this.liveCounter--;
    }, 1000);
    console.log(this.liveCounter);
  }
  pauseCounter() {
    clearInterval(this.interval);
  }

  setTimer(e: any) {
    if (e === 'pause') {
      this.pauseButtonClickCount++;
      this.pauseCounter();
      this.timerLog.push(`Stop at ${new Date()}`);
    } else if (e === 'stop') {
      this.liveCounter = 0;
    } else {
      this.startCounter(parseInt(e.value));
      this.startButtonClickCount++;
      this.timerLog.push(`Start at ${new Date()}`);
    }
  }
}
