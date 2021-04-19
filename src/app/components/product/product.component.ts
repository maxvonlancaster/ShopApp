import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  constructor(
    public cartService: CartService, 
    public productService: ProductsService) {   }


  ngOnInit(): void {
  }

  onBuy(): void {
    this.product.IsAvailable = !this.product.IsAvailable;
    this.cartService.buyProduct(this.product);
  }

  deleteFromCart(): void{
    var i = this.cartService.boughtProducts.indexOf(this.product);
    this.cartService.boughtProducts.splice(i, 1);
    
    this.product.IsAvailable = true;
    this.product.IsOnCart = false;
  }

}
