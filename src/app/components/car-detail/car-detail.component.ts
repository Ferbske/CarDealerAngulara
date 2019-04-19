import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CarModel} from '../../models/car/car.model';
import {ActivatedRoute} from '@angular/router';
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

  constructor(private route: ActivatedRoute, private carService: CarService, private employeeService: EmployeeService) {
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
            } else {
              this.owner = 'Not Owned';
            }

            console.log(response);
            if (this.car.soldBy != null) {
              this.employeeService.getAEmployee(this.car.soldBy)
                .subscribe((response2) => {
                    this.seller = response2[0].firstName + ' ' + response2[0].lastName;
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
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  deleteCustomer() {
    this.carService.deleteCustomer(this.car.chassisNumber)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  deleteSeller() {
    this.carService.deleteSoldBy(this.car.chassisNumber)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
