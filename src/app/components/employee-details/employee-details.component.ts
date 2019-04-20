import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../models/employee/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee = {
    '_id': 'null',
    'firstName': 'Loading',
    'lastName': 'Loading',
    'department': 'Loading',
    'job': 'Loading'
  };

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) {
    this.getEmployee();
  }

  ngOnInit() {
  }

  getEmployee() {
    this.route.params.subscribe(params => {
      this.employeeService.getAEmployee(params['index'])
        .subscribe((response) => {
            this.employee = response;
          },
          (error) => console.log(error)
        );
    });
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employee._id)
      .subscribe(
        (response) => this.router.navigate(['/employee']),
        (error) => console.log(error)
      );
  }
}
