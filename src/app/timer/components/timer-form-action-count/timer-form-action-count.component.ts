import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-form-action-count',
  templateUrl: './timer-form-action-count.component.html',
  styleUrls: ['./timer-form-action-count.component.scss'],
})
export class TimerFormActionCountComponent implements OnInit {
  displayStartButtonClickCount = 0;
  displayPauseButtonClickCount = 0;

  @Input() startButtonCountClick: number = 0;
  @Input() pauseButtonCountClick: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.displayStartButtonClickCount = this.startButtonCountClick;
    this.displayPauseButtonClickCount = this.pauseButtonCountClick;
  }
}
