import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { InstagramContentComponent } from '../shared/instagram-content/instagram-content.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ],

})
export class HomeModule { }
