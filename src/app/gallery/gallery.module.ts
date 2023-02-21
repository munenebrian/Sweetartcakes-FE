import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { HomegalleryComponent } from './homegallery/homegallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GalleryComponent,
    HomegalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule
  ]
})
export class GalleryModule { }
