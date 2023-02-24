import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { SharedModule } from '../shared/shared.module';
import { HomeblogsComponent } from './homeblogs/homeblogs.component';
import { BlogsRoutingModule } from './blogs-routing.modules';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';



@NgModule({
  declarations: [
    BlogsComponent,
    HomeblogsComponent,
    BlogdetailsComponent,
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule
  ]
})
export class BlogsModule { }
