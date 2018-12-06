import {Injectable} from '@angular/core';
import {CarModel} from './car.model';

@Injectable({
  providedIn: 'root',
})

export class CarService {
  cars: CarModel[] = [
    new CarModel(1234,'Test Car 1','Test Car 1','Test Car 1'),
    new CarModel(1235,'Test Car 2','Test Car 2','Test Car 2'),
    new CarModel(1236,'Test Car 3','Test Car 3','Test Car 3'),
    new CarModel(1237,'Test Car 4','Test Car 4','Test Car 4')
  ];

  constructor() { }

  getAllCars(): CarModel[] {
    return this.cars;
  }

  findOneCar(index: number): CarModel {
    return this.cars[index];
  }
}
