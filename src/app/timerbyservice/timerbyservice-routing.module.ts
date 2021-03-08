import { TimerContainerSerComponent } from './components/timer-container-ser/timer-container-ser.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '', component: TimerContainerSerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerbyserviceRoutingModule { }
