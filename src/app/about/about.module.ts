import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './about-routing.module';
import { HomeaboutComponent } from './homeabout/homeabout.component';



@NgModule({
  declarations: [
    AboutComponent,
    HomeaboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
