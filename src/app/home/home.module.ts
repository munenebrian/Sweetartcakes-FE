import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TopDealsComponent } from './top-deals/top-deals.component';
import { TopSellingComponent } from './top-selling/top-selling.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { AppModule } from "../app.module";
import { InstagramContentComponent } from '../components/instagram-content/instagram-content.component';

@NgModule({
    declarations: [
        HomeComponent,
        IndexComponent,
        CategoriesComponent,
        ShippingComponent,
        TopDealsComponent,
        TopSellingComponent,
        NavbarComponent,
        InstagramContentComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule,
    ]
})
export class HomeModule { }
