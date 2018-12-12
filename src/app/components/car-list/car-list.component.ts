import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { CarModel } from '../../models/car/car.model';
import { CarService } from '../../models/car/car.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: []
})
export class CarListComponent implements OnInit, OnDestroy {
  cars: CarModel[];
  subscription: Subscription;
  @Output() carSelected = new EventEmitter<void>();

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.subscription = this.carService.getCars()
      .subscribe(
        (cars: CarModel[]) => {
          this.cars = cars;
        },
        (error) => console.log(error)
      );
  }

  onSelected() {
    this.carSelected.emit();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
