import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarruselComponent } from './components/carrusel/carrusel.component';


@NgModule({
  declarations: [
  
    CarruselComponent
  ],
  exports: [
    CarruselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ]
})
export class SharedModule { }
