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
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeService } from './models/employee/employee.service';
import { SoldByEditComponent } from './components/sold-by-edit/sold-by-edit.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthService } from './components/auth/auth.service';
import { AuthGuardService } from './components/auth/auth-guard.service';

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
    CarCustomerEditComponent,
    EmployeeDetailsComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    SoldByEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [CarService, EmployeeService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
