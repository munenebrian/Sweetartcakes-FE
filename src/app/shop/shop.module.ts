import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ShopComponent } from './shop.component';
import { SharedModule } from '../shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoriesComponent } from './categories/categories.component';
import { OccasionalCakesComponent } from './occasional-cakes/occasional-cakes.component';
import { OccasionalCakesDetailsComponent } from './occasional-cakes-details/occasional-cakes-details.component';
import { EngagementCakesComponent } from './engagement-cakes/engagement-cakes.component';
import { RuracioCakesComponent } from './ruracio-cakes/ruracio-cakes.component';
import { EngagementDetailsComponent } from './engagement-details/engagement-details.component';
import { RuracioDetailsComponent } from './ruracio-details/ruracio-details.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CategoriesComponent,
    OccasionalCakesComponent,
    OccasionalCakesDetailsComponent,
    EngagementCakesComponent,
    RuracioCakesComponent,
    EngagementDetailsComponent,
    RuracioDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    NgxPaginationModule,
  ]
})
export class ShopModule { }
