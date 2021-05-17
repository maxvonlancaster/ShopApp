import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { CartComponent } from './components/cart/cart.component';
import { HighlightDirective } from '../shared/directives/highlight.directive';

const components = [CartListComponent, FirstComponentComponent, CartComponent];

@NgModule({
    imports: [CommonModule],
    declarations: [...components, HighlightDirective],
    exports: [...components],
    providers: [HighlightDirective]
  })
  export class CartModule {}
