import { Component, OnInit } from '@angular/core';
import { HandletimerService } from '../../handletimer.service';

@Component({
  selector: 'app-count-down-counter-ser',
  templateUrl: './count-down-counter-ser.component.html',
  styleUrls: ['./count-down-counter-ser.component.scss']
})
export class CountDownCounterSerComponent implements OnInit {

  timerCount: number = 0;
  constructor(private handleTimerService: HandletimerService) { }

  ngOnInit(): void {
    this.handleTimerService.timerCounter$.subscribe(count =>  this.timerCount = count);
  }

}
