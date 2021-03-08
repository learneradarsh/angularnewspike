import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-container-ser',
  templateUrl: './timer-container-ser.component.html',
  styleUrls: ['./timer-container-ser.component.scss']
})
export class TimerContainerSerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setTimer(e) {
    console.log(e);
  }
}
