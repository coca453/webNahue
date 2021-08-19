//Modulos
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
//Pages
import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { ServiciosComponent } from './servicios/servicios.component';
//children
import { SeguridadComponent } from './servicios/seguridad/seguridad.component';

import { DistribucionComponent } from './servicios/distribucion/distribucion.component';



const routes: Routes = [

    {
        path: '',
        component: PageComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent},
            { path: 'contacto', component: ContactoComponent },
            { path: 'institucional', component: InstitucionalComponent },
            {
                path: 'servicios', component: ServiciosComponent,
                children: [
                    { path: 'seguridad', component: SeguridadComponent },
                    { path: 'distribucion', component: DistribucionComponent },
                ]
            },


        ]
    }

];

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }
