import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from 'src/app/interfaces/blogs';
import { CategoryBlogs } from 'src/app/interfaces/category-blogs';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {

  blogsCategory: CategoryBlogs[] = [];
  singleBlog:Blogs[] = [];
  id:number = 0;

  constructor(private api:BlogService,private route:ActivatedRoute, private http:HttpClient) {};

  ngOnInit(): void {
    this.http.get<CategoryBlogs[]>('https://sweetartcakes-be-production.up.railway.app/blogcategories/').subscribe(data =>{
      this.blogsCategory = data;
      console.log(data);
    })

    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.api.getBlogDetails(this.id).subscribe(
          datax =>{
            this.singleBlog = datax;
            console.log(datax)
          }
        )
      }
    );
  }


}
