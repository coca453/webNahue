import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { PageComponent } from './page.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { PageRoutingModule } from './page.routing';



@NgModule({
  declarations: [
        PageComponent,
        ContactoComponent,
        SeguridadComponent,
        ServiciosComponent,
        InstitucionalComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    PageRoutingModule
  ],
  exports: [
    PageComponent,
    ContactoComponent,
    SeguridadComponent,
    ServiciosComponent,
    InstitucionalComponent,
  ]
})
export class PageModule { }
