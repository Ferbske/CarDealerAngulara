import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../../models/car/car.service';

@Component({
  selector: 'app-car-customer',
  templateUrl: './car-customer.component.html',
  styleUrls: ['./car-customer.component.css'],
  providers: []
})
export class CarCustomerComponent implements OnInit {
  index: number;
  firstName: string;
  lastName: string;
  age: number;
  street: string;
  houseNumber: number;
  postalCode: string;
  inputsEmpty: boolean = true;

  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) {
    this.check();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['index'];
    });
  }

  onSubmitAddCustomer() {
    this.carService.addCustomer(this.index, this.firstName, this.lastName, this.age, this.street, this.houseNumber, this.postalCode)
      .subscribe(
        (response) => this.router.navigate(['/home'],
          (error) => console.log(error)
        ));
  }

  check() {
    setTimeout(() => {
      if (this.firstName != null && this.lastName != null && this.age != null && this.street != null && this.houseNumber != null && this.postalCode != null) {
        this.inputsEmpty = false;
        this.check();
      } else {
        this.check();
      }
    }, 100);
  }
}
