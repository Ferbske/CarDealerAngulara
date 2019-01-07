import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { CarCreateComponent } from "./components/car-create/car-create.component";
import { CarEditComponent } from "./components/car-edit/car-edit.component";
import {CarCustomerComponent} from './components/car-customer/car-customer.component';
import {CarCustomerEditComponent} from './components/car-customer-edit/car-customer-edit.component';
import {EmployeeCreateComponent} from './components/employee-create/employee-create.component';
import {EmployeeEditComponent} from './components/employee-edit/employee-edit.component';
import {SoldByEditComponent} from './components/sold-by-edit/sold-by-edit.component';
import {AuthGuardService} from './components/auth/auth-guard.service';
import {SignupComponent} from './components/auth/signup/signup.component';
import {SigninComponent} from './components/auth/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full'},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'home/:index', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'car/create', component: CarCreateComponent, canActivate: [AuthGuardService] },
  { path: 'car/edit/:index', component: CarEditComponent, canActivate: [AuthGuardService] },
  { path: 'car/customer/:index', component: CarCustomerComponent, canActivate: [AuthGuardService] },
  { path: 'car/customer/edit/:index', component: CarCustomerEditComponent, canActivate: [AuthGuardService] },
  { path: 'employee', component: EmployeeListComponent, canActivate: [AuthGuardService] },
  { path: 'employee/detail/:index', component: EmployeeListComponent, canActivate: [AuthGuardService] },
  { path: 'employee/create', component: EmployeeCreateComponent, canActivate: [AuthGuardService] },
  { path: 'employee/edit/:index', component: EmployeeEditComponent, canActivate: [AuthGuardService] },
  { path: 'car/soldby/:index', component: SoldByEditComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
