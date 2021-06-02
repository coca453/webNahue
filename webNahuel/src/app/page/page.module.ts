import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { InstitucionalModule } from './institucional/institucional.module';
import { PageRoutingModule } from './page.routing';

import { PageComponent } from './page.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
        PageComponent,
        ContactoComponent,
        SeguridadComponent,
        ServiciosComponent,
        
        HomeComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    PageRoutingModule,
    InstitucionalModule
  ],
  exports: [
    PageComponent,
    ContactoComponent,
    SeguridadComponent,
    ServiciosComponent,
    
  ]
})
export class PageModule { }
