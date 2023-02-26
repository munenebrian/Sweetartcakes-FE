import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  categories: Category[] = [];

  constructor() {}
  

  ngOnInit(): void {
    // this.homecategoriesService.getCategories().subscribe(data => {
    //   this.categories = data;
    // });
  }
}
