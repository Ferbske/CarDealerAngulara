import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarModel} from '../../models/car/car.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../../models/car/car.service';
import {Subscription} from 'rxjs';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  car = {
    'chassisNumber': 1111,
    'brand': 'Loading',
    'fuelType': 'Loading',
    'typeCar': 'Loading',
    'ownedBy': null,
    'soldBy': null
  };

  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) {
    this.getCar();
    // this.route.params.subscribe(params => {
    //   const index = params['index'];
    //   console.log(index)
    //   this.carService.getACar(this.index)
    //     .subscribe(
    //       (car: CarModel[]) => {
    //         this.car = car[0];
    //         console.log(this.car);
    //       },
    //       (error) => console.log(error)
    //     );
    // });
  }

  ngOnInit() {
  }

  getCar() {
    this.route.params.subscribe(param => {
      this.carService.getACar(param['index'])
        .subscribe((response) => {
            this.car = response;
          },
          (error) => {
            console.log(error);
          });
    });
  }

  onSubmitEditCar() {
    this.carService.editCar(this.car.chassisNumber, this.car.brand, this.car.fuelType, this.car.typeCar)
      .subscribe(
        (response) => this.router.navigate(['/home']),
        (error) => console.log(error)
      );
  }
}
