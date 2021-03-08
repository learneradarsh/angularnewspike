import { ProductItemDTO } from './../../model/product-dto';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-listing-page',
  templateUrl: './product-listing-page.component.html',
  styleUrls: ['./product-listing-page.component.scss'],
})
export class ProductListingPageComponent implements OnInit {
  productList: ProductItemDTO[];
  viewMode: string;
  showLoader: boolean = true;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.allProducts$.subscribe((data) => {
      this.productList = [...data];
      this.showLoader = false;
    });
  }

  sortProductByPrice(value: string) {
    switch(value) {
      case "lowtohigh":
        this.sortLowToHigh();
        break;
      case "hightolow":
        this.sortHighToLow();
        break;
      default:
        break;
    }
  }
  
  sortLowToHigh() {
    this.productList.sort((a,b) => a.price-b.price);
  }

  sortHighToLow() {
    this.productList.sort((a,b) => b.price-a.price);
  }

  listView() {
    this.viewMode = 'list';
  }

  gridView() {
    this.viewMode = 'grid';
  }
}
