import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
        {path:"",component:ProductsComponent},
        { path: 'product-details/:id', component: ProductDetailsComponent },
        { path: 'category-products/:id', component: CategoriesComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}