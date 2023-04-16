import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ShopComponent } from './shop.component';
import { SharedModule } from '../shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoriesComponent } from './categories/categories.component';
import { EngagementCakesComponent } from './engagement-cakes/engagement-cakes.component';
import { RuracioCakesComponent } from './ruracio-cakes/ruracio-cakes.component';
import { EngagementDetailsComponent } from './engagement-details/engagement-details.component';
import { RuracioDetailsComponent } from './ruracio-details/ruracio-details.component';
import { BabyshowerCakesComponent } from './babyshower-cakes/babyshower-cakes.component';
import { BabyshowerDetailsComponent } from './babyshower-details/babyshower-details.component';
import { BridalshowerCakesComponent } from './bridalshower-cakes/bridalshower-cakes.component';
import { BridalshowerDetailsComponent } from './bridalshower-details/bridalshower-details.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CategoriesComponent,
    EngagementCakesComponent,
    RuracioCakesComponent,
    EngagementDetailsComponent,
    RuracioDetailsComponent,
    BabyshowerCakesComponent,
    BabyshowerDetailsComponent,
    BridalshowerCakesComponent,
    BridalshowerDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    NgxPaginationModule,
  ]
})
export class ShopModule { }
