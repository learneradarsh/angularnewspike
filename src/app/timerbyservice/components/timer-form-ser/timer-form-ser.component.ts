import { Component, OnInit } from '@angular/core';
import { HandletimerService } from '../../handletimer.service';

@Component({
  selector: 'app-timer-form-ser',
  templateUrl: './timer-form-ser.component.html',
  styleUrls: ['./timer-form-ser.component.scss']
})
export class TimerFormSerComponent implements OnInit {

  constructor(private handleTimerService: HandletimerService) { }

  ngOnInit(): void {
  }

  handleTimer(el: any) { 
    this.handleTimerService.setTimerCount(el.value);
  }
}
