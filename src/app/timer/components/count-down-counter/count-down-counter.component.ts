import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-counter',
  templateUrl: './count-down-counter.component.html',
  styleUrls: ['./count-down-counter.component.scss']
})
export class CountDownCounterComponent implements OnInit {

  @Input() counter: number = 0;
  constructor() { }

  ngOnInit(): void {
    
  }

}
