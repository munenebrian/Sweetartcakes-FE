import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from 'src/app/interfaces/blogs';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {

  singleBlog:Blogs[] = [];
  id:number = 0;

  constructor(private api:BlogService,private route:ActivatedRoute) {};

  ngOnInit(): void {
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
