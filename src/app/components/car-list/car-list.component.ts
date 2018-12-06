import {Component, Input, OnInit} from '@angular/core';
import { CarModel } from '../../models/car/car.model';
import { CarService } from '../../models/car/car.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  title = 'Car List Component';
  cars$: Observable<CarModel[]>;
  cars: CarModel[];

  constructor(private carService: CarService) {
    // this.cars$ = this.carService.getAllCars();
    this.cars = carService.allCars();
  }

  ngOnInit() {
  }
}
