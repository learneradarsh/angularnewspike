import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HandletimerService } from '../../handletimer.service';

@Component({
  selector: 'app-timer-form-action-count-ser',
  templateUrl: './timer-form-action-count-ser.component.html',
  styleUrls: ['./timer-form-action-count-ser.component.scss'],
})
export class TimerFormActionCountSerComponent implements OnInit, OnDestroy {
  starteButtonClickCount: number = 0;
  pauseButtonClickCount: number = 0;
  subscriptionOne: Subscription;
  subscriptionTwo: Subscription;
  constructor(private handleTimerService: HandletimerService) {}

  ngOnInit(): void {
    this.subscriptionOne = this.handleTimerService.startButtonClickCounter$.subscribe(
      (count) => (this.starteButtonClickCount = count)
    );
    this.subscriptionTwo = this.handleTimerService.pauseButtonClickCounter$.subscribe(
      (count) => (this.pauseButtonClickCount = count)
    );
  }

  ngOnDestroy() {
    this.subscriptionOne.unsubscribe();
    this.subscriptionTwo.unsubscribe();
  }
}
