import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
  title = 'Car Item Component';

  constructor() { }

  ngOnInit() {
  }

}
