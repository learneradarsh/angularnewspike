import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.scss']
})
export class TimerFormComponent implements OnInit {
  isStart: boolean = true;
  startButtonClickCount = 0;
  pauseButtonClickCount = 0;
  timerLog: string[];
  @Output() timeValueEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleTimer(timerInput) {
    if(this.isStart){
      this.startButtonClickCount++;
      this.timerLog.push(`Started at ${new Date()}`);
      this.isStart = !this.isStart;
    } else {
      this.pauseButtonClickCount++;
      this.timerLog.push(`Paused at ${new Date()}`);
      this.isStart = !this.isStart;
    }
    this.timeValueEmitter.emit(timerInput.value);
  }
}
