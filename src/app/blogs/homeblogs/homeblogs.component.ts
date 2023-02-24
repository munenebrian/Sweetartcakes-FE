import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/interfaces/blogs';

@Component({
  selector: 'app-homeblogs',
  templateUrl: './homeblogs.component.html',
  styleUrls: ['./homeblogs.component.css']
})
export class HomeblogsComponent implements OnInit{

  constructor(private http:HttpClient) {}

  blogs:Blogs[] = [];

  ngOnInit(): void {
    this.http.get<Blogs[]>('https://sweetartcakes-be-production.up.railway.app/blogs/').subscribe(data =>{
      this.blogs = data;
      console.log(data);
    })
  }

}