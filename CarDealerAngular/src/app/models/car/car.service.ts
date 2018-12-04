import { Injectable } from "@angular/core";
import { Car } from "./car.model";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CarService {
  cars: Car[] = [{
      "chassisNumber": "000001",
      "brand": "TEST BRAND",
      "f uelType": "TEST FUELTYPE",
      "typeCar": "TEST TYPECAR"
    },
    {
      "chassisNumber": "000002",
      "brand": "TEST BRAND",
      "f uelType": "TEST FUELTYPE",
      "typeCar": "TEST TYPECAR"
    }];
  constructor(private http: HttpClient) {}

  allCars(): Car[] {
    return this.cars;
  }

  allCarsObs(): Observable<Car[]> {
    return this.http.get<any>('localhost:3000/car')
      .pipe(
        map(result => result.results)
      );
  }

  getCar(id: number): Car {
    return this.cars[id];
  }
}
