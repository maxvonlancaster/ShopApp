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
  }

  deleteProduct(product: Product): void {
    const i = this.boughtProducts.indexOf(product);
    this.boughtProducts.splice(i, 1);
  }
}
