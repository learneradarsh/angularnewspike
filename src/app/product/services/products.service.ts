import { baseAPIPath } from './../../../config';
import { ProductItemDTO } from './../model/product-dto';
import { ItemDTO } from './../model/Item-dto';
import { shareReplay, map, take, takeLast, filter} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  allProducts$ = this.getProductsFromAPI$().pipe(
    map((productList) => 
      productList.filter((product) => product.id <= 40)),
    map((productsList) =>
      productsList.map((product) => this.transformProduct(product))
    ),
    shareReplay(1)
  );

  private getProductsFromAPI$() {
    return this.http.get<ItemDTO[]>(`${baseAPIPath}/photos`);
  }

  private transformProduct(product: ItemDTO) {
    return {
      id: product.id,
      title: 'Product title',
      imageUrl: 'https://via.placeholder.com/150/92c952',
      description:
        'this is my description for product which explains how product will help you to make your life easy.',
      price: Math.floor(Math.random() * 40) + 1 
    } as ProductItemDTO;
  }
}
