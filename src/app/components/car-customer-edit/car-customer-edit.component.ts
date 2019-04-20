import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerModel} from '../../models/customer/customer.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CarService} from '../../models/car/car.service';
import {CarModel} from '../../models/car/car.model';

@Component({
  selector: 'app-car-customer-edit',
  templateUrl: './car-customer-edit.component.html',
  styleUrls: ['./car-customer-edit.component.css']
})
export class CarCustomerEditComponent implements OnInit, OnDestroy {
  index: number;
  customer: CustomerModel = {
    'firstName': 'Loading',
    'lastName': 'Loading',
    'age': 1,
    'street': 'Loading',
    'houseNumber': 99999,
    'postalCode': 'Loading'
  };

  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) {
    this.getCar();
    // this.subscriptionParams = this.route.params.subscribe(params => {
    //   this.index = params['index'];
    //   this.subscriptionCarService = this.carService.getACar(this.index)
    //     .subscribe(
    //       (car: CarModel[]) => {
    //         const carSelected = car[0];
    //         this.customer = carSelected.ownedBy;
    //       },
    //       (error) => console.log(error)
    //     );
    // });
  }

  ngOnInit() {
  }

  getCar() {
    this.route.params.subscribe(param => {
      this.index = param['index'];
      this.carService.getACar(this.index)
        .subscribe((response) => {
            this.customer = response.ownedBy;
          },
          (error) => {
            console.log(error);
          });
    });
  }

  onSubmitEditCustomer() {
    this.carService.editCustomer(this.index, this.customer.firstName, this.customer.lastName, this.customer.age, this.customer.street, this.customer.houseNumber, this.customer.postalCode)
      .subscribe(
        (response) => this.router.navigate(['/home'],
        (error) => console.log(error)
      ));
  }
}
