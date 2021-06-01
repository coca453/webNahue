import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageComponent } from './components/page/page.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { ServiciosComponent } from './components/page/servicios/servicios.component';
import { SeguridadComponent } from './components/page/seguridad/seguridad.component';
import { InstitucionalComponent } from './components/page/institucional/institucional.component';
import { MisionComponent } from './components/page/institucional/mision/mision.component';
import { VisionComponent } from './components/page/institucional/vision/vision.component';
import { ContactoComponent } from './components/page/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageComponent,
    NavbarComponent,
    ServiciosComponent,
    SeguridadComponent,
    InstitucionalComponent,
    MisionComponent,
    VisionComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
