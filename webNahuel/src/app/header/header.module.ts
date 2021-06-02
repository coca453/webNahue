import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header.component';
import { PageModule } from '../page/page.module';
import { PageRoutingModule } from '../page/page.routing';
import { BrandComponent } from './brand/brand.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
      NavbarComponent,
      HeaderComponent,
      BrandComponent,
      CarrouselComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    CarrouselComponent
  ]
})
export class HeaderModule { }
