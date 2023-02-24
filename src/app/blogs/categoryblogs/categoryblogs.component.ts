import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from 'src/app/interfaces/blogs';
import { CategoryBlogs } from 'src/app/interfaces/category-blogs';
import { CategoryblogsService } from 'src/app/services/categoryblogs.service';

@Component({
  selector: 'app-categoryblogs',
  templateUrl: './categoryblogs.component.html',
  styleUrls: ['./categoryblogs.component.css']
})
export class CategoryblogsComponent implements OnInit{

  blogs: Blogs[] = [];
  categoryblogs:CategoryBlogs[] = [];
  id:number = 0;


  constructor(private api : CategoryblogsService,private route:ActivatedRoute, private http:HttpClient) { }

  ngOnInit(){

    this.http.get<CategoryBlogs[]>('https://sweetartcakes-be-production.up.railway.app/blogcategories/').subscribe(data =>{
      this.categoryblogs = data;
      console.log(data);
    })

    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.api.getCategoryBlogs(this.id).subscribe(
          datax =>{
            this.blogs = datax;
            console.log(this.blogs)
          }
        )
      }
    );
  }

}
