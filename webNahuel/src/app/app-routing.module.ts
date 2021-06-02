import { Route } from '@angular/compiler/src/core';
import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
//import { PageRoutingModule } from './page/page.routing.ts.bko';
import { PageComponent } from './page/page.component';




const routes : Routes =[

  
  {path: '**', redirectTo : '', pathMatch: 'full'},
  {path: '', component: PageComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
    //PageRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
