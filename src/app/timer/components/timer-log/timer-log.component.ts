import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.scss'],
})
export class TimerLogComponent implements OnInit{
  @Input() timerLogList: string[];
  constructor() {
  }

  ngOnInit(): void {
  }
}
