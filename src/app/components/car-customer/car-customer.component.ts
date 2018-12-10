import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerModel} from '../../models/customer/customer.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {CarService} from '../../models/car/car.service';

@Component({
  selector: 'app-car-customer',
  templateUrl: './car-customer.component.html',
  styleUrls: ['./car-customer.component.css']
})
export class CarCustomerComponent implements OnInit, OnDestroy {
  index: number;
  customer: CustomerModel;
  private subscriptionParams: Subscription;
  private subscriptionCarService: Subscription;

  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit() {
    this.subscriptionParams = this.route.params.subscribe(params => {
      this.index = params['index'];
    });
  }

  onSubmitEditCustomer() {
    this.subscriptionCarService = this.carService;
  }

  ngOnDestroy() {
    this.subscriptionCarService.unsubscribe();
    this.subscriptionParams.unsubscribe();
  }
}
