import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HandletimerService } from '../../handletimer.service';

@Component({
  selector: 'app-timer-log-ser',
  templateUrl: './timer-log-ser.component.html',
  styleUrls: ['./timer-log-ser.component.scss']
})
export class TimerLogSerComponent implements OnInit, OnDestroy {

  logsArray: any[];
  constructor(private handleTimerService: HandletimerService) { }
  subscription: Subscription;
  ngOnInit(): void {
    this.subscription = this.handleTimerService.timerLog$.subscribe(logs => {;
      this.logsArray = [...logs];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
