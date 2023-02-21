import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { SharedModule } from '../shared/shared.module';
import { ExperienceRoutingModule } from './experience-routing.module';
import { ExpehomeComponent } from './expehome/expehome.component';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { FooterComponent } from '../home/footer/footer.component';
import { InstagramContentComponent } from '../components/instagram-content/instagram-content.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    ExperienceComponent,
    ExpehomeComponent,
  ],
  imports: [
    HomeModule,
    ExperienceRoutingModule,
  ]
})
export class ExperienceModule { }

