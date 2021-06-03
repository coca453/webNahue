import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  mobile: boolean = false;
  constructor() {}

  ngOnInit() {
    if (window.screen.width < 768) {
      // 768px portrait
      this.mobile = true;
    }
  }
}
