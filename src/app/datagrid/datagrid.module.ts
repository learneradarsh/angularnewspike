import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatagridRoutingModule } from './datagrid-routing.module';
import { DisplayDataInGridComponent } from './components/display-data-in-grid/display-data-in-grid.component';


@NgModule({
  declarations: [DisplayDataInGridComponent],
  imports: [
    CommonModule,
    DatagridRoutingModule
  ]
})
export class DatagridModule { }
