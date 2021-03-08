import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { CountDownCounterComponent } from './components/count-down-counter/count-down-counter.component';
import { TimerFormComponent } from './components/timer-form/timer-form.component';
import { TimerLogComponent } from './components/timer-log/timer-log.component';
import { TimerFormActionCountComponent } from './components/timer-form-action-count/timer-form-action-count.component';
import { TimerContainerComponent } from './components/timer-container/timer-container.component';


@NgModule({
  declarations: [CountDownCounterComponent, TimerFormComponent, TimerLogComponent, TimerFormActionCountComponent, TimerContainerComponent],
  imports: [
    CommonModule,
    TimerRoutingModule
  ]
})
export class TimerModule { }
