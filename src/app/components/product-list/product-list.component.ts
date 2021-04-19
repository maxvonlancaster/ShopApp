import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

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
    console.log('bought: ', product.Id);
    product.IsAvailable = !product.IsAvailable;
    this.cartService.buyProduct(product);
  }
}
