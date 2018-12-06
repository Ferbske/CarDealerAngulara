import {Component, Input, OnInit} from '@angular/core';
import { CarModel } from '../../models/car/car.model';
import { CarService } from '../../models/car/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: CarModel[];

  constructor(private carService: CarService) {
    this.cars = carService.getAllCars();
  }

  ngOnInit() {
  }
}
