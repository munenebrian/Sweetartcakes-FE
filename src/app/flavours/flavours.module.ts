import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlavoursComponent } from './flavours.component';
import { HomeflavoursComponent } from './homeflavours/homeflavours.component';
import { SharedModule } from '../shared/shared.module';
import { FlavoursRoutingModule } from './flavours-routing.module';



@NgModule({
  declarations: [
    FlavoursComponent,
    HomeflavoursComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlavoursRoutingModule
  ]
})
export class FlavoursModule { }
