import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { CartService } from '../../services/cart.service';

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

  deleted(product: Product): void{
    this.cartService.deleteProduct(product);
  }

  totalPrice(): number{
    return this.cartService.totalPrice();
  }

  total(): number{
    return this.cartService.totalBought();
  }

}
