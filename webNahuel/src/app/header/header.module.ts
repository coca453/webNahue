import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header.component';
import { PageModule } from '../page/page.module';
import { PageRoutingModule } from '../page/page.routing';




@NgModule({
  declarations: [
      NavbarComponent,
      HeaderComponent
  ],
  imports: [
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    NavbarComponent
  ]
})
export class HeaderModule { }
