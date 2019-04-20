import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CarModel} from '../../models/car/car.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../../models/car/car.service';
import {Subscription} from 'rxjs';
import {EmployeeService} from '../../models/employee/employee.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: [CarService]
})
export class CarDetailComponent implements OnInit {
  car = {
    'chassisNumber': 1111,
    'brand': 'Loading',
    'fuelType': 'Loading',
    'typeCar': 'Loading',
    'ownedBy': null,
    'soldBy': null
  };
  owner: string;
  seller: string;
  hasCustomer: boolean;

  constructor(private route: ActivatedRoute, private carService: CarService, private employeeService: EmployeeService, private router: Router) {
    this.getCar();
  }

  ngOnInit() {
  }

  getCar() {
    this.route.params.subscribe(param => {
      this.carService.getACar(param['index'])
        .subscribe((response) => {
            this.car = response;
            if (this.car.ownedBy != null) {
              this.owner = this.car.ownedBy.firstName + ' ' + this.car.ownedBy.lastName;
              this.hasCustomer = false;
            } else {
              this.hasCustomer = true;
              this.owner = 'Not Owned';
            }

            if (this.car.soldBy != null) {
              this.employeeService.getAEmployee(this.car.soldBy)
                .subscribe((response2) => {
                    this.seller = response2.firstName + ' ' + response2.lastName;
                  },
                  (error) => {
                    console.log(error);
                  });
            } else {
              this.seller = 'Not Sold';
            }
          },
          (error) => {
            console.log(error);
          });
    });
  }

  deleteCar() {
    this.carService.deleteCar(this.car.chassisNumber)
      .subscribe(
        (response) => this.router.navigate(['/home']),
        (error) => console.log(error)
      );
  }

  deleteCustomer() {
    this.carService.deleteCustomer(this.car.chassisNumber)
      .subscribe(
        (response) => this.getCar(),
        (error) => console.log(error)
      );
  }

  deleteSeller() {
    this.carService.deleteSoldBy(this.car.chassisNumber)
      .subscribe(
        (response) => this.getCar(),
        (error) => console.log(error)
      );
  }
}
