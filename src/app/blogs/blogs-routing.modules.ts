import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { BlogsComponent } from './blogs.component';
import { CategoryblogsComponent } from './categoryblogs/categoryblogs.component';
import { HomeblogsComponent } from './homeblogs/homeblogs.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
    children: [
        {path:"",component: HomeblogsComponent},
        {path:"blog-details/:id",component: BlogdetailsComponent},
        {path:"category-blogs/:id",component: CategoryblogsComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}