import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car/car.model';
import { CarService } from '../../models/car/car.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // cars: Car[] = [{
  //   "chassisNumber": "9999",
  //   "brand": "TEST BRAND",
  //   "fuelType": "TEST FUELTYPE",
  //   "typeCar": "TEST TYPECAR"
  // }];
  //
  // title: string = 'Home Component';
  // cars$: Observable<Car[]>;
  //
  // constructor(private carService: CarService) {
  //   this.cars$ = this.carService.allCarsObs();
  // }

  ngOnInit() {
  }
}
