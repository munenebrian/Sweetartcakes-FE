import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { HomegalleryComponent } from './homegallery/homegallery.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    children: [
        {path:"",component: HomegalleryComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}