import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HeaderModule } from '../header/header.module';
import { PageRoutingModule } from './page.routing';
import { InstitucionalModule } from './institucional/institucional.module';
import { ServiciosModule } from './servicios/servicios.module';

import { PageComponent } from './page.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
        PageComponent,
        ContactoComponent,
        ServiciosComponent,
        HomeComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    PageRoutingModule,
    InstitucionalModule,
    HeaderModule,
    ServiciosModule
  ],
  exports: [
    PageComponent,
    ContactoComponent,
    ServiciosComponent,
    
  ]
})
export class PageModule { }
