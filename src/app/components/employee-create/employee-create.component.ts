import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../models/employee/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  firstName: string;
  lastName: string;
  department: string;
  job: string;
  inputsEmpty: boolean = true;

  constructor(private employeeService: EmployeeService) {
    this.check();
  }

  ngOnInit() {
  }

  check() {
    setTimeout(() => {
      if (this.firstName != null && this.lastName != null && this.department != null && this.job != null) {
        this.inputsEmpty = false;
        this.check();
      } else {
        this.check();
      }
    }, 100);
  }

  onSubmitCreateEmployee() {
    this.employeeService.addEmployee(this.firstName, this.lastName, this.department, this.job)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
