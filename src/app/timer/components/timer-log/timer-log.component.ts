import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.scss'],
})
export class TimerLogComponent implements OnInit, OnChanges {
  displayTimerLog: string[];
  @Input() timerLogList: string[];
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.displayTimerLog = [...this.timerLogList];
    this.timerLogList.forEach(log => this.displayTimerLog.push(log));
  }
}
