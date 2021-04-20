import { Injectable } from '@angular/core';
import { Category } from 'src/app/core/enums/category.enum';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    const products: Product[] = [
      { Id: 0, Name: 'Apple', Price: 1, Catgory: Category.Food, Description: '', IsAvailable: true, IsOnCart: false},
      { Id: 1, Name: 'Orange', Price: 1, Catgory: Category.Food, Description: '', IsAvailable: true, IsOnCart: false},
      { Id: 2, Name: 'Bread', Price: 1, Catgory: Category.Food, Description: '', IsAvailable: true, IsOnCart: false},
      { Id: 3, Name: 'Trip', Price: 1, Catgory: Category.Service, Description: '', IsAvailable: true, IsOnCart: false},
      { Id: 4, Name: 'Mountain hike', Price: 10, Catgory: Category.Service, Description: '', IsAvailable: true, IsOnCart: false},
      { Id: 5, Name: 'Repair', Price: 10, Catgory: Category.Service, Description: '', IsAvailable: true, IsOnCart: false},
      { Id: 6, Name: 'Photoshop', Price: 10, Catgory: Category.Soft, Description: '', IsAvailable: true, IsOnCart: false},
      { Id: 7, Name: 'Visual Studio', Price: 50, Catgory: Category.Soft, Description: '', IsAvailable: true, IsOnCart: false},
      { Id: 8, Name: 'Rider', Price: 50, Catgory: Category.Soft, Description: '', IsAvailable: true, IsOnCart: false}
    ];

    return products;
  }
}
