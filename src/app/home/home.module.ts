import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { InstagramContentComponent } from '../components/instagram-content/instagram-content.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
    CategoriesComponent,
    FooterComponent,
    InstagramContentComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ],

  exports: [
    FooterComponent,
    InstagramContentComponent,
    NavbarComponent
  ]
})
export class HomeModule { }
