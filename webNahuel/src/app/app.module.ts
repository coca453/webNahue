import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';

import { HeaderModule } from './header/header.module';
import { PageModule } from './page/page.module';
//import { PageRoutingModule } from './page/page.routing.ts.bko';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    PageModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
    
    //PageRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
