import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/enums/category.enum';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  constructor() { }


  ngOnInit(): void {
  }

}
