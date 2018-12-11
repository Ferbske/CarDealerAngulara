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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'home/:index', component: HomeComponent},
  { path: 'car/create', component: CarCreateComponent},
  { path: 'car/edit/:index', component: CarEditComponent},
  { path: 'car/customer/:index', component: CarCustomerComponent},
  { path: 'car/customer/edit/:index', component: CarCustomerEditComponent},
  { path: 'employee', component: EmployeeListComponent},
  { path: 'employee/detail/:index', component: EmployeeListComponent},
  { path: 'employee/create', component: EmployeeCreateComponent},
  { path: 'employee/edit/:index', component: EmployeeEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
