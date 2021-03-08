import { UserDataService } from './../../services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { GridDataDTO } from '../../model/grid-data-dto';

@Component({
  selector: 'app-display-data-in-grid',
  templateUrl: './display-data-in-grid.component.html',
  styleUrls: ['./display-data-in-grid.component.scss']
})
export class DisplayDataInGridComponent implements OnInit {

  gridDataList: GridDataDTO[];
  header: string [];
  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userDataService.userList$.subscribe(data => {
      this.gridDataList = [...data];
      
      this.gridDataList.forEach((dataItem) => {
        this.header = [...Object.keys(dataItem)];
      }) 
    });
  }
}
