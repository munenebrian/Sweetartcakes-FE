import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoryproducts } from 'src/app/interfaces/category-products';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  catproducts:Categoryproducts[] = [];
  id:number = 0;

  constructor(private categoriesService : CategoriesService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.categoriesService.getCategoryProducts(this.id).subscribe(
          datax =>{
            this.catproducts = datax;
            console.log(this.catproducts)
          }
        )
      }
    );
  }

}
