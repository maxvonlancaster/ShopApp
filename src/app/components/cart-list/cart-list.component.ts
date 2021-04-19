import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  products: Product[];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.cartService.boughtProducts;
  }

  getBoughtProducts(): Product[] {
    return this.cartService.boughtProducts;
  }

  isCartEmpty(): boolean {
    const res = this.cartService.boughtProducts.length === 0;
    console.log(res);
    return res;
  }

  deleted(product: Product){
    this.cartService.deleteProduct(product);
  }

}
