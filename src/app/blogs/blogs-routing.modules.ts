import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { HomeblogsComponent } from './homeblogs/homeblogs.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
    children: [
        {path:"",component: HomeblogsComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}