import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public boughtProducts: Product[] = [];

  constructor() { }

  buyProduct(product: Product): void {
    // let prodCopy: Product = { 
    //   Id: product.Id, 
    //   Name: product.Name, 
    //   Price: product.Price, 
    //   Catgory: product.Catgory, 
    //   Description: product.Description, 
    //   IsAvailable: false, 
    //   IsOnCart: true};
    product.IsOnCart = true;
    product.IsAvailable = false;
    this.boughtProducts.push(product);
  }

  deleteProduct(product: Product): void {
    product.IsOnCart = false;
    product.IsAvailable = true;
    const i = this.boughtProducts.indexOf(this.boughtProducts.find(p => p.Id === product.Id));
    this.boughtProducts.splice(i, 1);
  }
}
