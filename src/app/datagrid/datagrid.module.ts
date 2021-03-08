import { UserDataService } from './services/user-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatagridRoutingModule } from './datagrid-routing.module';
import { DisplayDataInGridComponent } from './components/display-data-in-grid/display-data-in-grid.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DisplayDataInGridComponent],
  imports: [
    CommonModule,
    DatagridRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserDataService
  ]
})
export class DatagridModule { }
