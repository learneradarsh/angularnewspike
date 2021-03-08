import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.scss']
})
export class TimerFormComponent implements OnInit {

  @Output() timeValueEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleTimer(timerInput) {
    this.timeValueEmitter.emit(timerInput.value);
  }
}
