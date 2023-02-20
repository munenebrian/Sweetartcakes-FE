import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpehomeComponent } from './expehome/expehome.component';
import { ExperienceComponent } from './experience.component';

const routes: Routes = [
  {
    path: '',
    component: ExperienceComponent,
    children: [
        {path:"",component:ExpehomeComponent},
        // { path: 'blog-details/:id', component: BlogDetailsComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceRoutingModule {}