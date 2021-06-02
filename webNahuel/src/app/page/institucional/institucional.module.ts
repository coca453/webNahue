import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VisionComponent } from './vision/vision.component';
import { MisionComponent } from './mision/mision.component';
import { InstitucionalComponent } from './institucional.component';






@NgModule({
    declarations: [
      InstitucionalComponent,
      VisionComponent,
      MisionComponent,

  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    InstitucionalComponent,
    VisionComponent,
    MisionComponent,
  ]
})
export class InstitucionalModule { }
