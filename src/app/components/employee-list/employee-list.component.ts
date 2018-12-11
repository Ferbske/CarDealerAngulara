import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmployeeModel} from '../../models/employee/employee.model';
import {Subscription} from 'rxjs';
import {EmployeeService} from '../../models/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  employees: EmployeeModel[];
  subscription: Subscription;
  showDetails: boolean;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.subscription = this.employeeService.getEmployees()
      .subscribe(
        (employees: EmployeeModel[]) => {
          this.employees = employees.results;
        },
        (error) => console.log(error)
      );
  }

  onSelected() {
    this.showDetails = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
