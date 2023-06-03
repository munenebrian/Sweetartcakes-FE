import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent } from '../shared/footer/footer.component';
import { InstagramContentComponent } from '../shared/instagram-content/instagram-content.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { HomeWeddingComponent } from './home-wedding/home-wedding.component';
import { HomeBirthdayComponent } from './home-birthday/home-birthday.component';
import { HomeCorporateComponent } from './home-corporate/home-corporate.component';
import { HomeAnniversaryComponent } from './home-anniversary/home-anniversary.component';


@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
    HomeWeddingComponent,
    HomeBirthdayComponent,
    HomeCorporateComponent,
    HomeAnniversaryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ],

})
export class HomeModule { }
