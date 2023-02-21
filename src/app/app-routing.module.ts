import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'experience', pathMatch: 'full' },

  {
    path: 'home',
    canActivate: [],
    loadChildren: ()=> import('./home/home.module').then((m)=>m.HomeModule)
  },
  {
    path: 'shop',
    canActivate: [],
    loadChildren: ()=> import('./shop/shop.module').then((m)=>m.ShopModule)
  },
  {
    path: 'contact',
    canActivate: [],
    loadChildren: ()=> import('./contact/contact.module').then((m)=>m.ContactModule)
  },
  {
    path: 'experience',
    canActivate: [],
    loadChildren: ()=> import('./experience/experience.module').then((m)=>m.ExperienceModule)
  },
  {
    path: 'flavours',
    canActivate: [],
    loadChildren: ()=> import('./flavours/flavours.module').then((m)=>m.FlavoursModule)
  },
  {
    path: 'gallery',
    canActivate: [],
    loadChildren: ()=> import('./gallery/gallery.module').then((m)=>m.GalleryModule)
  },
  {
    path: 'about',
    canActivate: [],
    loadChildren: ()=> import('./about/about.module').then((m)=>m.AboutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
