import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs-compat/add/operator/map';

@Injectable({
  providedIn: 'root',
})

export class CarService {

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
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
          return response.json();
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
          return response.json();
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

  addCustomer(chassisNumber: number, firstName: string, lastName: string, age: number, street: string, houseNumber: number, postalCode: string) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post('https://cardealer-api.herokuapp.com/customer', {
      'chassisNumber': chassisNumber,
      'firstName': firstName,
      'lastName': lastName,
      'age': age,
      'street': street,
      'houseNumber': houseNumber,
      'postalCode': postalCode
    }, {
      headers: headers
    });
  }

  editCustomer(chassisNumber: number, firstName: string, lastName: string, age: number, street: string, houseNumber: number, postalCode: string) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put('https://cardealer-api.herokuapp.com/customer', {
      'chassisNumber': chassisNumber,
      'newFirstName': firstName,
      'newLastName': lastName,
      'newAge': age,
      'newStreet': street,
      'newHouseNumber': houseNumber,
      'newPostalCode': postalCode
    }, {
      headers: headers
    });
  }

  deleteCustomer(chassisNumber: number) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete('https://cardealer-api.herokuapp.com/customer/' + chassisNumber, {
      headers: headers
    });
  }

  editSoldBy(chassisNumber: number, employeeID: string) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put('https://cardealer-api.herokuapp.com/car/employee', {
      'chassisNumber': chassisNumber,
      'employeeID': employeeID
    }, {
      headers: headers
    });
  }

  deleteSoldBy(chassisNumber: number) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete('https://cardealer-api.herokuapp.com/car/employee/' + chassisNumber, {
      headers: headers
    });
  }
}
