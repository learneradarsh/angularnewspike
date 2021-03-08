import { DisplayDataInGridComponent } from './components/display-data-in-grid/display-data-in-grid.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: DisplayDataInGridComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatagridRoutingModule { }
