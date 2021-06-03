import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header.component';

import { BrandComponent } from './brand/brand.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule, NavbarModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
      NavbarComponent,
      HeaderComponent,
      BrandComponent,
      CarrouselComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NavbarModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    CarrouselComponent
  ]
})
export class HeaderModule { }
