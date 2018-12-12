import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {EmployeeModel} from '../../models/employee/employee.model';
import {EmployeeService} from '../../models/employee/employee.service';
import {CarService} from '../../models/car/car.service';

@Component({
  selector: 'app-sold-by-edit',
  templateUrl: './sold-by-edit.component.html',
  styleUrls: ['./sold-by-edit.component.css']
})
export class SoldByEditComponent implements OnInit, OnDestroy {
  index: string;
  employeeID: string;
  employees: EmployeeModel[];
  private subscriptionParams: Subscription;
  private subscriptionEmployee: Subscription;
  private subscriptionCar: Subscription;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private carService: CarService) {
  }

  ngOnInit() {
    this.subscriptionParams = this.route.params.subscribe(params => {
      this.index = params['index'];
      this.subscriptionEmployee = this.employeeService.getEmployees()
        .subscribe(
          (employees: EmployeeModel[]) => {
            this.employees = employees.results;
          },
          (error) => console.log(error)
        );
    });
  }

  onSubmitEditSoldBy() {
    this.subscriptionCar = this.carService.editSoldBy(this.index, this.employeeID)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscriptionParams.unsubscribe();
    this.subscriptionEmployee.unsubscribe();
  }
}
