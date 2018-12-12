import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmployeeModel} from '../../models/employee/employee.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../../models/employee/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit, OnDestroy {
  index: string;
  employee: EmployeeModel = {
    'firstName': 'Loading',
    'lastName': 'Loading',
    'department': 'Loading',
    'job': 'Loading'
  };
  private subscriptionParams: Subscription;
  private subscriptionEmployeeService: Subscription;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.subscriptionParams = this.route.params.subscribe(params => {
      this.index = params['index'];
      this.subscriptionEmployeeService = this.employeeService.getAEmployee(this.index)
        .subscribe(
          (employee: any[]) => {
            const employeeSelected = employee.results[0];
            this.employee = employeeSelected;
          },
          (error) => console.log(error)
        );
    });
  }

  onSubmitEditEmployee() {
    this.subscriptionEmployeeService = this.employeeService.editEmployee(this.index, this.employee.firstName, this.employee.lastName, this.employee.department, this.employee.job)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscriptionParams.unsubscribe();
  }
}
