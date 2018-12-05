import { Component, OnInit } from '@angular/core';
import { CarModel } from '../../models/car/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  title = 'Car List Component';

  cars: CarModel[] = [
    new CarModel(1234,'Test Car 1','Test Car 1','Test Car 1'),
    new CarModel(1235,'Test Car 2','Test Car 2','Test Car 2')
  ];

  constructor() {

  }

  ngOnInit() {

  }
}
