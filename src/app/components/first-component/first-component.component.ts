import { Component, OnInit } from '@angular/core';
import { Category } from '../../enums/category.enum';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  public Name: string;
  public Description: string;
  public Price: number;
  public Category: Category;
  public IsAvailable: boolean;

  constructor() { }


  ngOnInit(): void {
  }

}
