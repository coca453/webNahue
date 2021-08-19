//modulos
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { SeguridadComponent } from '../servicios/seguridad/seguridad.component';
import { DistribucionComponent } from '../servicios/distribucion/distribucion.component';


@NgModule({
    declarations: [
        SeguridadComponent,
        DistribucionComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        SeguridadComponent,
        DistribucionComponent
    ]
})
export class ServiciosModule { }
