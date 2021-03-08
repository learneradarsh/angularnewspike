import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerbyserviceRoutingModule } from './timerbyservice-routing.module';
import { CountDownCounterSerComponent } from './components/count-down-counter-ser/count-down-counter-ser.component';
import { TimerFormSerComponent } from './components/timer-form-ser/timer-form-ser.component';
import { TimerLogSerComponent } from './components/timer-log-ser/timer-log-ser.component';
import { TimerFormActionCountSerComponent } from './components/timer-form-action-count-ser/timer-form-action-count-ser.component';
import { TimerContainerSerComponent } from './components/timer-container-ser/timer-container-ser.component';
import { HandletimerService } from './handletimer.service';


@NgModule({
  declarations: [CountDownCounterSerComponent, TimerFormSerComponent, TimerLogSerComponent, TimerFormActionCountSerComponent, TimerContainerSerComponent],
  imports: [
    CommonModule,
    TimerbyserviceRoutingModule
  ],
  providers: [
    HandletimerService
  ]
})
export class TimerbyserviceModule { }
