import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.scss'],
})
export class TimerFormComponent implements OnInit {
  isStart: boolean = true;
  @Output() timeValueEmitter = new EventEmitter<string>();
  @Input() pauseLogList: string[];
  constructor() {}

  ngOnInit(): void {}

  start(value: string) {
    if (this.isStart) {
      this.timeValueEmitter.emit(value);
      this.isStart = !this.isStart;
    } else {
      this.timeValueEmitter.emit('pause');
      this.isStart = !this.isStart;
    }
  }

  reset() {
    this.timeValueEmitter.emit('stop');
  }
}
