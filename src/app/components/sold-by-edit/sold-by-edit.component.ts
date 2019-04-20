import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeModel} from '../../models/employee/employee.model';
import {EmployeeService} from '../../models/employee/employee.service';
import {CarService} from '../../models/car/car.service';

@Component({
  selector: 'app-sold-by-edit',
  templateUrl: './sold-by-edit.component.html',
  styleUrls: ['./sold-by-edit.component.css']
})
export class SoldByEditComponent implements OnInit {
  index: number;
  employees: EmployeeModel[];
  employeeID: string;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private carService: CarService, private router: Router) {
    this.getEmployees();
    this.route.params.subscribe(params => {
      this.index = params['index'];
    });
  }

  ngOnInit() {
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(
        (response) => {
          this.employees = response.results;
        },
        (error) => console.log(error)
      );
  }

  onSubmitEditSoldBy(id) {
    this.carService.editSoldBy(this.index, id)
      .subscribe(
        (response) => this.router.navigate(['/home']),
        (error) => console.log(error)
      );
  }
}
