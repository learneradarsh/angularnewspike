import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.scss']
})
export class TimerLogComponent implements OnInit {

  displayTimerLog: string[] = [];
  @Input() timerLogList: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.displayTimerLog = [...this.timerLogList];
  }

}
