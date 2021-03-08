import { Component, OnInit } from '@angular/core';
import { HandletimerService } from '../../handletimer.service';

@Component({
  selector: 'app-timer-log-ser',
  templateUrl: './timer-log-ser.component.html',
  styleUrls: ['./timer-log-ser.component.scss']
})
export class TimerLogSerComponent implements OnInit {

  customArr: any[];
  constructor(private handleTimerService: HandletimerService) { }

  ngOnInit(): void {
    this.handleTimerService.timerLog$.subscribe(logs => {
      console.log(logs);
      this.customArr = [...logs];
    })
  }

}
