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
  }

  onSelected(car: CarModel) {
    this.carSelected.emit(car);
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
