import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { HomeaboutComponent } from './homeabout/homeabout.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
        {path:"",component: HomeaboutComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}