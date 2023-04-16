import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ShopComponent } from './shop.component';
import { EngagementCakesComponent } from './engagement-cakes/engagement-cakes.component';
import { RuracioCakesComponent } from './ruracio-cakes/ruracio-cakes.component';
import { EngagementDetailsComponent } from './engagement-details/engagement-details.component';
import { RuracioDetailsComponent } from './ruracio-details/ruracio-details.component';
import { BabyshowerCakesComponent } from './babyshower-cakes/babyshower-cakes.component';
import { BabyshowerDetailsComponent } from './babyshower-details/babyshower-details.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
        {path:"",component:ProductsComponent},
        { path: 'product-details/:id', component: ProductDetailsComponent },
        { path: 'category-products/:id', component: CategoriesComponent },
        { path: 'engagementcakes', component: EngagementCakesComponent },
        { path: 'engagementcakes-details/:id', component: EngagementDetailsComponent },
        { path: 'ruraciocakes', component: RuracioCakesComponent },
        { path: 'ruraciocakes-details/:id', component: RuracioDetailsComponent },
        { path: 'babyshowercakes', component: BabyshowerCakesComponent },
        { path: 'babyshowercakes-details/:id', component: BabyshowerDetailsComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}