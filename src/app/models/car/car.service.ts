import {Injectable} from '@angular/core';
import {CarModel} from './car.model';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

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

  // constructor(private http: HttpClient) { }
  constructor() { }

  allCars(): CarModel[] {
    return this.cars;
  }

  // getAllCars(): Observable<CarModel[]> {
    // return this.http.get<any>('https://cardealer-api.herokuapp.com/car')
    //   .pipe(
    //     map(result => result.results)
    //   );
  // }

  findOneCar(index: number): CarModel {
    return this.cars[index];
  }
}
