import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerModel} from '../../models/customer/customer.model';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CarService} from '../../models/car/car.service';

@Component({
  selector: 'app-car-customer-edit',
  templateUrl: './car-customer-edit.component.html',
  styleUrls: ['./car-customer-edit.component.css']
})
export class CarCustomerEditComponent implements OnInit, OnDestroy {
  index: number;
  customer: CustomerModel;
  private subscriptionParams: Subscription;
  private subscriptionCarService: Subscription;

  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit() {
    this.subscriptionParams = this.route.params.subscribe(params => {
      this.index = params['index'];
      this.subscriptionCarService = this.carService.getACar(this.index)
        .subscribe(
          (car: any[]) => {
            const carSelected = car.results[0];
            this.customer = carSelected.ownedBy;
          },
          (error) => console.log(error)
        );
    });
  }

  onSubmitEditCustomer() {
    this.subscriptionCarService = this.carService.editCustomer(this.index, this.customer.firstName, this.customer.lastName, this.customer.age, this.customer.street, this.customer.houseNumber, this.customer.postalCode)
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
