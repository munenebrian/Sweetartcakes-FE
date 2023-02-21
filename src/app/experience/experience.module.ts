import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { SharedModule } from '../shared/shared.module';
import { ExperienceRoutingModule } from './experience-routing.module';
import { ExpehomeComponent } from './expehome/expehome.component';

@NgModule({
  declarations: [
    ExperienceComponent,
    ExpehomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExperienceRoutingModule,
  ]
})
export class ExperienceModule { }

