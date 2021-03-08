import { Component, OnInit } from '@angular/core';
import { HandletimerService } from '../../handletimer.service';

@Component({
  selector: 'app-timer-form-action-count-ser',
  templateUrl: './timer-form-action-count-ser.component.html',
  styleUrls: ['./timer-form-action-count-ser.component.scss']
})
export class TimerFormActionCountSerComponent implements OnInit {

  starteButtonClickCount: number = 0;
  pauseButtonClickCount: number = 0;
  constructor(private handleTimerService: HandletimerService) { }

  ngOnInit(): void {
    this.handleTimerService.startButtonClickCounter$.subscribe(count => this.starteButtonClickCount = count);
    this.handleTimerService.pauseButtonClickCounter$.subscribe(count => this.pauseButtonClickCount = count);
  }

}
