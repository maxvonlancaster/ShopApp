import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[];

  constructor(private productsService: ProductsService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  bought(product: Product): void{
    this.cartService.buyProduct(product);
  }

  deleted(product: Product): void{
    this.cartService.deleteProduct(product);
  }
}
