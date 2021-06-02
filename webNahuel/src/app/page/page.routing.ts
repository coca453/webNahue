import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageComponent } from './page.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { ServiciosComponent } from './servicios/servicios.component';



const routes: Routes = [

    {   path: '', 
        component: PageComponent,
        children:[
              {path: '', component: PageComponent},
              {path: 'contacto', component: ContactoComponent},
              {path: 'institucional', component: InstitucionalComponent},
              {path: 'seguridad', component: SeguridadComponent},
              {path: 'servicios', component:ServiciosComponent},
    ]}

];

@NgModule({
    
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule {}
