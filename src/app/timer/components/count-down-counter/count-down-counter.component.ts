import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-counter',
  templateUrl: './count-down-counter.component.html',
  styleUrls: ['./count-down-counter.component.scss']
})
export class CountDownCounterComponent implements OnInit {

  displayCounter: number = 0;
  @Input() counter: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.displayCounter = this.counter;
  }

}
