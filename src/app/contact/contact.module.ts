import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';



@NgModule({
  declarations: [
    ContactComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
