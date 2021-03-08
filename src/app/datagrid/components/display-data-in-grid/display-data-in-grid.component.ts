import { Subscription } from 'rxjs';
import { UserDataService } from './../../services/user-data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GridDataDTO } from '../../model/grid-data-dto';

@Component({
  selector: 'app-display-data-in-grid',
  templateUrl: './display-data-in-grid.component.html',
  styleUrls: ['./display-data-in-grid.component.scss']
})
export class DisplayDataInGridComponent implements OnInit, OnDestroy {

  gridDataList: GridDataDTO[];
  tableHeader: string [];
  subscription: Subscription;
  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.subscription = this.userDataService.userList$.subscribe(data => {
      this.gridDataList = [...data];
      
      this.gridDataList.forEach((dataItem) => {
        this.tableHeader = [...Object.keys(dataItem)];
      }); 
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
