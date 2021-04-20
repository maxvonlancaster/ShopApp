import { EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  bought = new EventEmitter<Product>();

  @Output()
  deleted = new EventEmitter<Product>();

  constructor() {   }

  ngOnInit(): void {
  }

  onBuy(): void {
    this.bought.emit(this.product);
  }

  deleteFromCart(): void{
    this.deleted.emit(this.product);
  }

}
