import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarModel} from '../../models/car/car.model';
import {ActivatedRoute} from '@angular/router';
import {CarService} from '../../models/car/car.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: []
})
export class CarDetailComponent implements OnInit, OnDestroy {
  car: CarModel = {
    'chassisNumber': 1111,
    'brand': 'Loading',
    'fuelType': 'Loading',
    'typeCar': 'Loading',
    'ownedBy': null,
    'soldBy': null
  };
  index: number;
  owner: string;
  hasCustomer: boolean = false;
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
            if (car[0].ownedBy === null) {
              this.owner = 'Not Owned';
              this.hasCustomer = true;
            } else {
              this.owner = car[0].ownedBy.firstName + ' ' + car[0].ownedBy.lastName;
              this.hasCustomer = false;
            }
            this.car = car[0];
          },
          (error) => console.log(error)
        );
    });
  }

  deleteCar() {
    this.subscriptionCarService = this.carService.deleteCar(this.car.chassisNumber)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  deleteCustomer() {
    this.subscriptionCarService = this.carService.deleteCustomer(this.car.chassisNumber)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  deleteSeller() {
    this.subscriptionCarService = this.carService.deleteSoldBy(this.car.chassisNumber)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscriptionParams.unsubscribe();
    this.subscriptionCarService.unsubscribe();
  }
}
