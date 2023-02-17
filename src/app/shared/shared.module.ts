import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseLayoutComponent } from '../components/base-layout/base-layout.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';


@NgModule({
  declarations: [
    BaseLayoutComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BaseLayoutComponent,
    NavbarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }