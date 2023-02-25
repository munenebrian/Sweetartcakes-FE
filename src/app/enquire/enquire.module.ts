import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquireComponent } from './enquire.component';
import { HomeenquireComponent } from './homeenquire/homeenquire.component';
import { EnquireRoutingModule } from './enquire-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EnquireComponent,
    HomeenquireComponent
  ],
  imports: [
    CommonModule,
    EnquireRoutingModule,
    SharedModule
  ]
})
export class EnquireModule { }
