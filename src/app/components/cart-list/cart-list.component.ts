import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  public products : Product[] = this.cartService.boughtProducts;


  constructor(public cartService: CartService) { 
    
  }

  ngOnInit(): void {
  }

  getBoughtProducts() : Product[] {
    var res = this.cartService.boughtProducts;
    return res;
  }

  isCartEmpty(): boolean {
    var res = this.cartService.boughtProducts.length == 0;
    console.log(res);
    return res;
  }

  

}
