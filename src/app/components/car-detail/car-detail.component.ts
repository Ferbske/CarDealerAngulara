import {Component, OnDestroy, OnInit} from '@angular/core';
import { CarModel } from '../../models/car/car.model';
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
  title = 'Car Detail Component';
  car: any[];
  index: number;
  owner: string;
  seller: string;
  hasCustomer: boolean = false;
  private subscriptionParams: Subscription;
  private subscriptionCarService: Subscription;

  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit() {
    this.subscriptionParams = this.route.params.subscribe(params => {
      this.index = params['index'];
        this.subscriptionCarService = this.carService.getACar(this.index)
          .subscribe(
            (car: any[]) => {
              const car = car.results[0];
              if (car.ownedBy === null) {
                this.owner = 'Not Owned';
                this.hasCustomer = true;
              } else {
                this.owner = car.ownedBy.firstName + ' ' + car.ownedBy.lastName;
              }
              if (car.soldBy === null) {
                this.seller = 'Not Sold';
              } else {
                this.seller = car.soldBy.firstName + ' ' + car.soldBy.lastName;
              }
              this.car = car;
              console.log(this.car);
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

  ngOnDestroy() {
    this.subscriptionParams.unsubscribe();
    this.subscriptionCarService.unsubscribe();
  }
}
