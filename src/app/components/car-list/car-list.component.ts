import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {CarModel} from '../../models/car/car.model';
import {CarService} from '../../models/car/car.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: []
})
export class CarListComponent implements OnInit {
  cars: CarModel[];
  car: CarModel;
  @Output() carSelected = new EventEmitter<CarModel>();

  constructor(private carService: CarService) {
    this.showCars();
  }

  ngOnInit() {
    // // this.subscription = this.carService.getCars()
    // //   .subscribe(
    // //     (cars: CarModel[]) => {
    // //       this.cars = cars;
    // //     },
    // //     (error) => console.log(error)
    // //   );
    // this.carService.getCars()
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
  }

  onSelected(car: CarModel) {
    // this.car = car;
    this.carSelected.emit(car);
  }

  onCarCreated() {
    this.showCars();
  }

  onCarDeleted() {
    this.showCars();
  }

  showCars() {
    this.carService.getCars()
      .subscribe(
        (response) => {
          this.cars = response.results;
        },
        (error) => console.log(error)
      );
  }
}
