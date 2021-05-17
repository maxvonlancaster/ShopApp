import { Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HostBinding } from '@angular/core';
import { HostListener } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  product: Product;

  @Output()
  deleted = new EventEmitter<Product>();

  constructor(highlightDirective: HighlightDirective) { // directive gets imported but does not work
  }

  // style: string = 'background-color: #ddd';

  private backgroundColor = '#ffffff !important';

  ngOnInit(): void {
  }

  // lifecycle hooks:
  ngOnChange(): void{
    console.log('changed: ', this.product.Id);
  }

  ngOnDestroy(): void{
    console.log('destroyed: ', this.product.Id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const change of Object.keys(changes)){
      console.log('change: ', change);
    }
  }

  deleteFromCart(): void{
    this.deleted.emit(this.product);
  }

  onBuy(): void {
    // not sure if to implement it here
  }

  onBlur(): void {
    console.log('red!');
    // this.style = 'background-color: #FF0000'
  }

  @HostBinding('style.backgroundColor') get getBackgroundColor(): string{
    return this.backgroundColor;
  }

  @HostBinding('style.cursor') get getCursor(): string{
    return 'pointer';
  }

  @HostListener('mouseenter') onMouseEnter(): void{
    this.backgroundColor = '#ff4314 !important';
  }

  @HostListener('mouseleave') onMouseLeave(): void{
    this.backgroundColor = '#ffffff !important';
  }
}
