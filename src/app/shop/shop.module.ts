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
import { ChristmassCakesComponent } from './christmass-cakes/christmass-cakes.component';
import { ChristmassDetailsComponent } from './christmass-details/christmass-details.component';
import { EasterCakesComponent } from './easter-cakes/easter-cakes.component';
import { EasterDetailsComponent } from './easter-details/easter-details.component';
import { FathersdayCakesComponent } from './fathersday-cakes/fathersday-cakes.component';
import { FathersdayDetailsComponent } from './fathersday-details/fathersday-details.component';
import { MothersdayCakesComponent } from './mothersday-cakes/mothersday-cakes.component';
import { MothersdayDetailsComponent } from './mothersday-details/mothersday-details.component';
import { GraduationCakesComponent } from './graduation-cakes/graduation-cakes.component';
import { GraduationDetailsComponent } from './graduation-details/graduation-details.component';
import { ValentinesCakesComponent } from './valentines-cakes/valentines-cakes.component';
import { ValentinesDetailsComponent } from './valentines-details/valentines-details.component';
import { CorporateCakesComponent } from './corporate-cakes/corporate-cakes.component';
import { CorporateDetailsComponent } from './corporate-details/corporate-details.component';
import { AnniversaryCakesComponent } from './anniversary-cakes/anniversary-cakes.component';
import { AnniversaryDetailsComponent } from './anniversary-details/anniversary-details.component';
import { BaptismalCakesComponent } from './baptismal-cakes/baptismal-cakes.component';
import { BaptismalDetailsComponent } from './baptismal-details/baptismal-details.component';
import { ChristeningCakesComponent } from './christening-cakes/christening-cakes.component';
import { ChristeningDetailsComponent } from './christening-details/christening-details.component';
import { BirthdayCakesComponent } from './birthday-cakes/birthday-cakes.component';
import { BirthdayDetailsComponent } from './birthday-details/birthday-details.component';



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
    BridalshowerDetailsComponent,
    ChristmassCakesComponent,
    ChristmassDetailsComponent,
    EasterCakesComponent,
    EasterDetailsComponent,
    FathersdayCakesComponent,
    FathersdayDetailsComponent,
    MothersdayCakesComponent,
    MothersdayDetailsComponent,
    GraduationCakesComponent,
    GraduationDetailsComponent,
    ValentinesCakesComponent,
    ValentinesDetailsComponent,
    CorporateCakesComponent,
    CorporateDetailsComponent,
    AnniversaryCakesComponent,
    AnniversaryDetailsComponent,
    BaptismalCakesComponent,
    BaptismalDetailsComponent,
    ChristeningCakesComponent,
    ChristeningDetailsComponent,
    BirthdayCakesComponent,
    BirthdayDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    NgxPaginationModule,
  ]
})
export class ShopModule { }
