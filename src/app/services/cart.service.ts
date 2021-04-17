import { Injectable } from '@angular/core';
import { Product } from '../models/product/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public boughtProducts: Product[] = [];

  constructor() { }

  buyProduct(product: Product): void {
    product.IsOnCart = true;
    this.boughtProducts.push(product);
    console.log("product bought");
  }
}
