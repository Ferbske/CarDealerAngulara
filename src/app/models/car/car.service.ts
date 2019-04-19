import {Injectable} from '@angular/core';
import 'rxjs-compat/add/operator/map';
import {AuthService} from '../../components/auth/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class CarService {
  private headers = {
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Token': this.authenticationService.getToken(),
      'Access-Control-Allow-Origin': '*'
    }
  };

  constructor(private http: HttpClient, private authenticationService: AuthService) {
  }

  getCars() {
    console.log(this.headers);
    return this.http.get<any>('https://cardealer-api.herokuapp.com/car', this.headers);
  }

  getACar(chassisNumber: number) {
    return this.http.get<any>('https://cardealer-api.herokuapp.com/car/' + chassisNumber, this.headers)
      .map(
        (response) => {
          return response.json().results;
        }
      );
  }

  addCar(chassisNumber: number, brand: string, fuelType: string, typeCar: string) {
    return this.http.post('https://cardealer-api.herokuapp.com/car', {
      'chassisNumber': chassisNumber,
      'brand': brand,
      'fuelType': fuelType,
      'typeCar': typeCar
    }, this.headers);
  }

  editCar(chassisNumber: number, brand: string, fuelType: string, typeCar: string) {
    return this.http.put('https://cardealer-api.herokuapp.com/car', {
      'chassisNumber': chassisNumber,
      'newBrand': brand,
      'newFuelType': fuelType,
      'newTypeCar': typeCar
    }, this.headers);
  }

  deleteCar(chassisNumber: number) {
    return this.http.delete('https://cardealer-api.herokuapp.com/car/' + chassisNumber, this.headers);
  }

  addCustomer(chassisNumber: number, firstName: string, lastName: string, age: number, street: string, houseNumber: number, postalCode: string) {
    return this.http.post('https://cardealer-api.herokuapp.com/customer', {
      'chassisNumber': chassisNumber,
      'firstName': firstName,
      'lastName': lastName,
      'age': age,
      'street': street,
      'houseNumber': houseNumber,
      'postalCode': postalCode
    }, this.headers);
  }

  editCustomer(chassisNumber: number, firstName: string, lastName: string, age: number, street: string, houseNumber: number, postalCode: string) {
    return this.http.put('https://cardealer-api.herokuapp.com/customer', {
      'chassisNumber': chassisNumber,
      'newFirstName': firstName,
      'newLastName': lastName,
      'newAge': age,
      'newStreet': street,
      'newHouseNumber': houseNumber,
      'newPostalCode': postalCode
    }, this.headers);
  }

  deleteCustomer(chassisNumber: number) {
    return this.http.delete('https://cardealer-api.herokuapp.com/customer/' + chassisNumber, this.headers);
  }

  editSoldBy(chassisNumber: number, employeeID: string) {
    return this.http.put('https://cardealer-api.herokuapp.com/car/employee', {
      'chassisNumber': chassisNumber,
      'employeeID': employeeID
    }, this.headers);
  }

  deleteSoldBy(chassisNumber: number) {
    return this.http.delete('https://cardealer-api.herokuapp.com/car/employee/' + chassisNumber, this.headers);
  }
}
