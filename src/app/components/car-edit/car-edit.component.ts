import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarModel} from '../../models/car/car.model';
import {ActivatedRoute} from '@angular/router';
import {CarService} from '../../models/car/car.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit, OnDestroy {
  index: number;
  car: CarModel = {
    'chassisNumber': 1111,
    'brand': 'Loading',
    'fuelType': 'Loading',
    'typeCar': 'Loading',
    'ownedBy': null,
    'soldBy': null
  };
  private subscriptionParams: Subscription;
  private subscriptionCarService: Subscription;

  constructor(private route: ActivatedRoute, private carService: CarService) {
  }

  ngOnInit() {
    this.subscriptionParams = this.route.params.subscribe(params => {
      this.index = params['index'];
      this.subscriptionCarService = this.carService.getACar(this.index)
        .subscribe(
          (car: CarModel[]) => {
            const carSelected = car[0];
            this.car = carSelected;
          },
          (error) => console.log(error)
        );
    });
  }

  onSubmitEditCar() {
    // console.log(this.car);
    this.subscriptionCarService = this.carService.editCar(this.car.chassisNumber, this.car.brand, this.car.fuelType, this.car.typeCar)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscriptionParams.unsubscribe();
  }
}
