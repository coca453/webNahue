import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  subscription: Subscription;
  imagen: number;
  source = timer(1000, 3500);

  constructor() {
    this.imagen = 0;
    this.subscription = this.source.subscribe(val => {
      switch (val % 3) {
        case 0: {
          this.imagen = val;
          break
        }
        case 1: {
          this.imagen = val;
          break
        }
        case 2: {
          this.imagen = val;
          break
        }
      }
    });
  }

  ngOnInit(): any {

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}





