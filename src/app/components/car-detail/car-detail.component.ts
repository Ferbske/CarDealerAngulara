import { Component, OnInit, Input } from '@angular/core';
import { CarModel } from "../../models/car/car.model";
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../../models/car/car.service";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  title = 'Car Detail Component';
  car: CarModel;
  index: number;

  constructor(private route: ActivatedRoute, private carService: CarService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['index'];
      this.car = this.carService.findOneCar(this.index);
    })
  }
}
