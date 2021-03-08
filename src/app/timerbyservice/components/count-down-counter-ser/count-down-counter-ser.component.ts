import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HandletimerService } from '../../handletimer.service';

@Component({
  selector: 'app-count-down-counter-ser',
  templateUrl: './count-down-counter-ser.component.html',
  styleUrls: ['./count-down-counter-ser.component.scss'],
})
export class CountDownCounterSerComponent implements OnInit, OnDestroy {
  timerCount: number = 0;
  constructor(private handleTimerService: HandletimerService) {}
  subscription: Subscription;
  ngOnInit(): void {
    this.subscription = this.handleTimerService.timerCounter$.subscribe(
      (count) => {
        this.timerCount = count;
        console.log(this.timerCount);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
