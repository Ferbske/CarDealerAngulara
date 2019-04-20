import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmployeeModel} from '../../models/employee/employee.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../models/employee/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee = {
    '_id': 'null',
    'firstName': 'Loading',
    'lastName': 'Loading',
    'department': 'Loading',
    'job': 'Loading'
  };

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) {
    this.getAEmployee();
  }

  ngOnInit() {
  }

  getAEmployee() {
    this.route.params.subscribe(param => {
      this.employeeService.getAEmployee(param['index'])
        .subscribe((response) => {
            this.employee = response;
          },
          (error) => console.log(error)
        );
    });
  }

  onSubmitEditEmployee() {
    this.employeeService.editEmployee(this.employee._id, this.employee.firstName, this.employee.lastName, this.employee.department, this.employee.job)
      .subscribe(
        (response) => this.router.navigate(['/employee']
        ));
  }
}
