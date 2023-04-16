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
import { BridalshowerDetailsComponent } from './bridalshower-details/bridalshower-details.component';
import { BridalshowerCakesComponent } from './bridalshower-cakes/bridalshower-cakes.component';
import { ChristmassCakesComponent } from './christmass-cakes/christmass-cakes.component';
import { ChristmassDetailsComponent } from './christmass-details/christmass-details.component';
import { EasterDetailsComponent } from './easter-details/easter-details.component';
import { EasterCakesComponent } from './easter-cakes/easter-cakes.component';
import { FathersdayDetailsComponent } from './fathersday-details/fathersday-details.component';
import { FathersdayCakesComponent } from './fathersday-cakes/fathersday-cakes.component';
import { MothersdayDetailsComponent } from './mothersday-details/mothersday-details.component';
import { MothersdayCakesComponent } from './mothersday-cakes/mothersday-cakes.component';
import { GraduationDetailsComponent } from './graduation-details/graduation-details.component';
import { GraduationCakesComponent } from './graduation-cakes/graduation-cakes.component';
import { ValentinesDetailsComponent } from './valentines-details/valentines-details.component';
import { ValentinesCakesComponent } from './valentines-cakes/valentines-cakes.component';
import { CorporateDetailsComponent } from './corporate-details/corporate-details.component';
import { CorporateCakesComponent } from './corporate-cakes/corporate-cakes.component';
import { AnniversaryDetailsComponent } from './anniversary-details/anniversary-details.component';
import { AnniversaryCakesComponent } from './anniversary-cakes/anniversary-cakes.component';
import { BaptismalDetailsComponent } from './baptismal-details/baptismal-details.component';
import { BaptismalCakesComponent } from './baptismal-cakes/baptismal-cakes.component';
import { ChristeningDetailsComponent } from './christening-details/christening-details.component';
import { ChristeningCakesComponent } from './christening-cakes/christening-cakes.component';

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
        { path: 'bridalshowercakes', component: BridalshowerCakesComponent },
        { path: 'bridalshowercakes-details/:id', component: BridalshowerDetailsComponent },
        { path: 'christmascakes', component: ChristmassCakesComponent },
        { path: 'christmascakes-details/:id', component: ChristmassDetailsComponent },
        { path: 'eastercakes', component: EasterCakesComponent },
        { path: 'eastercakes-details/:id', component: EasterDetailsComponent },
        { path: 'fathersdaycakes', component: FathersdayCakesComponent },
        { path: 'fathersdaycakes-details/:id', component: FathersdayDetailsComponent },
        { path: 'mothersdaycakes', component: MothersdayCakesComponent },
        { path: 'mothersdaycakes-details/:id', component: MothersdayDetailsComponent },
        { path: 'graduationcakes', component: GraduationCakesComponent },
        { path: 'graduationcakes-details/:id', component: GraduationDetailsComponent },
        { path: 'valentinescakes', component: ValentinesCakesComponent },
        { path: 'valentinescakes-details/:id', component: ValentinesDetailsComponent },
        { path: 'corporatecakes', component: CorporateCakesComponent },
        { path: 'corporatecakes-details/:id', component: CorporateDetailsComponent },
        { path: 'anniversarycakes', component: AnniversaryCakesComponent },
        { path: 'anniversarycakes-details/:id', component: AnniversaryDetailsComponent },
        { path: 'baptismalcakes', component: BaptismalCakesComponent },
        { path: 'baptismalcakes-details/:id', component: BaptismalDetailsComponent },
        { path: 'christeningcakes', component: ChristeningCakesComponent },
        { path: 'christeningcakes-details/:id', component: ChristeningDetailsComponent },
        { path: 'birthdaycakes', component: ChristeningCakesComponent },
        { path: 'birthdaycakes-details/:id', component: ChristeningDetailsComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}