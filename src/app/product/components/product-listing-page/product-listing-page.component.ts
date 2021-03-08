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

  listView() {
    console.log('list');
    this.viewMode = 'list';
  }

  gridView() {
    console.log('grid');
    this.viewMode = 'grid';
  }
}
