import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/interfaces/blogs';
import { CategoryBlogs } from 'src/app/interfaces/category-blogs';

@Component({
  selector: 'app-homeblogs',
  templateUrl: './homeblogs.component.html',
  styleUrls: ['./homeblogs.component.css']
})
export class HomeblogsComponent implements OnInit{

  constructor(private http:HttpClient) {}

  blogs:Blogs[] = [];
  blogsCategory: CategoryBlogs[] = [];

  ngOnInit(): void {
    this.http.get<Blogs[]>('https://sweetartcakes-be-production.up.railway.app/blogs/').subscribe(data =>{
      this.blogs = data;
      console.log(data);
    })

    this.http.get<CategoryBlogs[]>('https://sweetartcakes-be-production.up.railway.app/blogcategories/').subscribe(data =>{
      this.blogsCategory = data;
      console.log(data);
    })
  }

}