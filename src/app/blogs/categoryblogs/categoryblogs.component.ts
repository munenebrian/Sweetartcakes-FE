import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryBlogs } from 'src/app/interfaces/category-blogs';
import { CategoryblogsService } from 'src/app/services/categoryblogs.service';

@Component({
  selector: 'app-categoryblogs',
  templateUrl: './categoryblogs.component.html',
  styleUrls: ['./categoryblogs.component.css']
})
export class CategoryblogsComponent implements OnInit{

  categoryblogs:CategoryBlogs[] = [];
  id:number = 0;


  constructor(private api : CategoryblogsService,private route:ActivatedRoute) { }

  ngOnInit(){

    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.api.getCategoryBlogs(this.id).subscribe(
          datax =>{
            this.categoryblogs = datax;
            console.log(this.categoryblogs)
          }
        )
      }
    );
  }

}
