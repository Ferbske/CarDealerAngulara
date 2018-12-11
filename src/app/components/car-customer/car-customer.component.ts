import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {CarService} from '../../models/car/car.service';

@Component({
  selector: 'app-car-customer',
  templateUrl: './car-customer.component.html',
  styleUrls: ['./car-customer.component.css'],
  providers: []
})
export class CarCustomerComponent implements OnInit, OnDestroy {
  index: number;
  firstName: string;
  lastName: string;
  age: number;
  street: string;
  houseNumber: number;
  postalCode: string;
  private subscriptionParams: Subscription;
  private subscriptionCarService: Subscription;
  inputsEmpty: boolean = true;

  constructor(private route: ActivatedRoute, private carService: CarService) {
    this.check();
  }

  ngOnInit() {
    this.subscriptionParams = this.route.params.subscribe(params => {
      this.index = params['index'];
    });
  }

  onSubmitAddCustomer() {
    console.log(this.customer);
    this.subscriptionCarService = this.carService.addCustomer(this.index, this.firstName, this.lastName, this.age, this.street, this.houseNumber, this.postalCode)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  check() {
    setTimeout(() => {
      if (this.firstName != null && this.lastName != null && this.age != null && this.street != null && this.houseNumber != null && this.postalCode != null) {
        this.inputsEmpty = false;
        this.check();
      } else {
        this.check();
      }
    }, 100);
  }

  ngOnDestroy() {
    // this.subscriptionCarService.unsubscribe();
    // this.subscriptionParams.unsubscribe();
  }
}
