import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../../models/employee/employee.service';
import {EmployeeModel} from '../../models/employee/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {
  employee: EmployeeModel = {
    'firstName': 'Loading',
    'lastName': 'Loading',
    'department': 'Loading',
    'job': 'Loading'
  };
  index: string;
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
            const employeeResult = employee.results[0];
            this.employee = employeeResult;
          },
          (error) => console.log(error)
        );
    });
  }

  deleteEmployee() {
    this.subscriptionEmployeeService = this.employeeService.deleteEmployee(this.index)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscriptionEmployeeService.unsubscribe();
    this.subscriptionParams.unsubscribe();
  }

}
