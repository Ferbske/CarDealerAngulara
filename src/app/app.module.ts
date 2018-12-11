import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarCreateComponent } from './components/car-create/car-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HomeComponent } from './components/home/home.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarService } from './models/car/car.service';
import { CarCustomerComponent } from './components/car-customer/car-customer.component';
import { CarCustomerEditComponent } from './components/car-customer-edit/car-customer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarListComponent,
    CarDetailComponent,
    CarCreateComponent,
    EmployeeListComponent,
    HomeComponent,
    CarEditComponent,
    CarCustomerComponent,
    CarCustomerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
