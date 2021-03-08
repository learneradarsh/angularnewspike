import { ProductItemDTO } from './../../model/product-dto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productItem: ProductItemDTO;
  @Input() viewOption: string = 'grid';
  constructor() { }
  ngOnInit(): void {
  }

}
