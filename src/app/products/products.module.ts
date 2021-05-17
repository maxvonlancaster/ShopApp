import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';


const components = [ProductComponent, ProductListComponent];

@NgModule({
    imports: [CommonModule],
    declarations: [...components],
    exports: [...components]
  })
  export class ProductsModule {}
