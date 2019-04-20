import {Component, EventEmitter, OnInit} from '@angular/core';
import {EmployeeModel} from '../../models/employee/employee.model';
import {EmployeeService} from '../../models/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeModel[];
  showDetails: boolean;

  constructor(private employeeService: EmployeeService) {
    this.showEmployees();
    this.showDetails = false;
  }

  ngOnInit() {
  }

  onSelected() {
    this.showDetails = true;
  }

  showEmployees() {
    this.employeeService.getEmployees()
      .subscribe(
        (response) => {
          this.employees = response.results;
        },
        (error) => console.log(error)
      );
  }
}
