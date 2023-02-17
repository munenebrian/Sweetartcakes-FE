import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { HomecategoriesService } from 'src/app/services/homecategories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  categories: Category[] = [];

  constructor(private homecategoriesService: HomecategoriesService) {}

  ngOnInit(): void {
    this.homecategoriesService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
