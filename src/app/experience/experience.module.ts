import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { SharedModule } from '../shared/shared.module';
import { ExperienceRoutingModule } from './experience-routing.module';
import { ExpehomeComponent } from './expehome/expehome.component';
import { InstagramContentComponent } from '../components/instagram-content/instagram-content.component';



@NgModule({
  declarations: [
    ExperienceComponent,
    ExpehomeComponent,
    // InstagramContentComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    ExperienceRoutingModule,
  ]
})
export class ExperienceModule { }

