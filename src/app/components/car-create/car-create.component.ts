import { Component, OnInit } from '@angular/core';
import { CarService } from '../../models/car/car.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css'],
  providers: []
})
export class CarCreateComponent implements OnInit {
  chassisNumber: number;
  brand: string;
  fuelType: string;
  typeCar: string;
  inputsEmpty: boolean = true;

  constructor(private carService: CarService) {
    this.check();
  }

  ngOnInit() {
  }

  check() {
    setTimeout(() => {
      if (this.chassisNumber != null && this.brand != null && this.fuelType != null && this.typeCar != null) {
        this.inputsEmpty = false;
        this.check();
      } else {
        this.check();
      }
    }, 100);
  }

  onSubmitCreateCar() {
    this.carService.addCar(this.chassisNumber, this.brand, this.fuelType, this.typeCar)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error));
  }
}
