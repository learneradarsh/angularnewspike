import { ProductItemDTO } from './../../model/product-dto';
import {
  Component,
  OnInit,
  Input,
  HostBinding,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit, OnChanges {
  @Input() productItem: ProductItemDTO;
  @Input() viewOption: string = 'grid';
  @HostBinding('style.flex-basis') flexBasis = '24%';
  constructor() {}
  ngOnInit(): void {}

  ngOnChanges() {
    if (this.viewOption === 'list') {
      this.flexBasis = '48%';
    } else {
      this.flexBasis = '24%';
    }
  }
}
