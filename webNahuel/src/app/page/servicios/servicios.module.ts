//modulos
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { SeguridadComponent } from '../servicios/seguridad/seguridad.component';
import { TrasladosComponent } from '../servicios/traslados/traslados.component';
import { DistribucionComponent } from '../servicios/distribucion/distribucion.component';


@NgModule({
    declarations: [
        SeguridadComponent,
        TrasladosComponent,
        DistribucionComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        SeguridadComponent,
        TrasladosComponent,
        DistribucionComponent

    ]
})
export class ServiciosModule { }
