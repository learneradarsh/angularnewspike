import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss']
})
export class TimerContainerComponent implements OnInit {

  timerValue: any;

  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.timerValue);
  }

  setTimer(e: any) {
    this.timerValue = e.value;
  }

}
