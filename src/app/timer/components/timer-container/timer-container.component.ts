import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss']
})
export class TimerContainerComponent implements OnInit {

  // counterValue: number; 
  isStart: boolean = true;
  startButtonClickCount = 0;
  pauseButtonClickCount = 0;
  timerLog: string[] = [];
  interval;
  liveCounter: number = 0;
  constructor() { 
  }

  ngOnInit(): void {
  }

  handleTimer(timerInput) {
    if(this.isStart){
      this.startButtonClickCount++;
      this.timerLog.push(`Started at ${new Date()}`);
      this.startCounter(timerInput.value);
      this.isStart = !this.isStart;
    } else {
      this.pauseButtonClickCount++;
      this.timerLog.push(`Paused at ${new Date()}`);
      this.pauseCounter();
      this.isStart = !this.isStart;
    }
  }

  startCounter(initialValue) {
    this.liveCounter = initialValue;
    this.interval = setInterval(() => {
      this.liveCounter--;
    }, 1000);
  }
  pauseCounter() {
    clearInterval(this.interval);
  }


  setTimer(e: any) {
    console.log(e.value);
    if(e.value == 'pause') {
      console.log('pausw wala');
      this.pauseButtonClickCount++;
      this.pauseCounter();
    } else if(e.value === 'stop') {
      this.liveCounter = 0; 
    } 
    else {
      this.startCounter(e.value);
      this.startButtonClickCount++;
    }
  }

}
