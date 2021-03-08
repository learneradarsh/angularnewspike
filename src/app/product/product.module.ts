import { ProductsService } from './services/products.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListingPageComponent } from './components/product-listing-page/product-listing-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ProductCardComponent, ProductListingPageComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductModule { }
