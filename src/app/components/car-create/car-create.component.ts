import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {
  title = 'Car Create Component';
  chassisNumber: number;
  brand: String;
  fuelType: String;
  typeCar: String;
  inputsEmpty : boolean = true;

  constructor() {
    this.check();
  }

  ngOnInit() {
  }

  check(){
    setTimeout(() =>{
      if (this.chassisNumber != null && this.brand != null && this.fuelType != null && this.typeCar != null) {
        this.inputsEmpty = false;
        this.check();
      } else {
        this.check();
      }
    }, 100)
  }

  onSubmitCreateCar() {
    console.log("submitted")
  }
}
