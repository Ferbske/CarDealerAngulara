import {Injectable} from '@angular/core';
import {CarModel} from './car.model';
import { Observable } from 'rxjs';
import {Http, Headers} from '@angular/http';
import 'rxjs-compat/add/operator/map';

@Injectable({
  providedIn: 'root',
})

export class CarService {
  cars: CarModel[] =
    [
      new CarModel(
        1234,
        'Test Car 1',
        'Test Car 1',
        'Test Car 1'
      ),
      new CarModel(
        1235,
        'Test Car 2',
        'Test Car 2',
        'Test Car 2'
      ),
      new CarModel(
        1236,
        'Test Car 3',
        'Test Car 3',
        'Test Car 3'
      ),
      new CarModel(
        1237,
        'Test Car 4',
        'Test Car 4',
        'Test Car 4'
      )
    ];

  constructor(private http: Http) { }

  findOneCar(index: number): CarModel {
    return this.cars[index];
  }

  createAuthorizationHeader(headers: Headers) {
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Content-Type', 'application/json');
  }

  getCars() {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get('https://cardealer-api.herokuapp.com/car', {
      headers: headers
    })
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

  getACar(chassisNumber: number) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get('https://cardealer-api.herokuapp.com/car/' + chassisNumber, {
      headers: headers
    })
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

  addCar(chassisNumber: number, brand: string, fuelType: string, typeCar: string) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post('https://cardealer-api.herokuapp.com/car', {
      'chassisNumber': chassisNumber,
      'brand': brand,
      'fuelType': fuelType,
      'typeCar': typeCar
    }, {
      headers: headers
    });
  }

  editCar(chassisNumber: number, brand: string, fuelType: string, typeCar: string) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put('https://cardealer-api.herokuapp.com/car', {
      'chassisNumber': chassisNumber,
      'newBrand': brand,
      'newFuelType': fuelType,
      'newTypeCar': typeCar
    }, {
      headers: headers
    });
  }

  deleteCar(chassisNumber: number) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete('https://cardealer-api.herokuapp.com/car/' + chassisNumber);
  }
}
