import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

}
