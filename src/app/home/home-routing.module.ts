import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
        {path:"",component:IndexComponent},
        // { path: 'blog-details/:id', component: BlogDetailsComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}