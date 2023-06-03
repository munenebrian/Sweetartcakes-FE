import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseLayoutComponent } from '../components/base-layout/base-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InstagramContentComponent } from './instagram-content/instagram-content.component';
import { FooterComponent } from './footer/footer.component';
import { EnquiryButtonComponent } from './enquiry-button/enquiry-button.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';


@NgModule({
  declarations: [
    BaseLayoutComponent,
    NavbarComponent,
    InstagramContentComponent,
    FooterComponent,
    EnquiryButtonComponent,
    Navbar2Component,
    CallToActionComponent
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
    InstagramContentComponent,
    FooterComponent,
    EnquiryButtonComponent,
    Navbar2Component
  ]
})
export class SharedModule { }