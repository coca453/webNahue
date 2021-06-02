import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  

  imagen : number;
  constructor() {
    this.imagen = 0;
   }

  ngOnInit(): void {
    
    this.observableTimer();
  }
  observableTimer(){
    const source = timer(1000,3500);
    const abc = source.subscribe(val => {
      console.log(val, '-', val % 3);
      switch(val % 3){
        case 0:{
          console.log('Imagen 1');
          this.imagen = val;
          break
        }
        case 1:{
          console.log('Imagen 2');
          this.imagen = val;
          break
        }
        case 2:{
          console.log('Imagen 3');
          this.imagen = val;
          break
        }
      }
    })
  }
  
}



