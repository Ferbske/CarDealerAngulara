import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { CarCreateComponent } from "./components/car-create/car-create.component";
import { CarEditComponent } from "./components/car-edit/car-edit.component";
import {CarCustomerComponent} from './components/car-customer/car-customer.component';
import {CarCustomerEditComponent} from './components/car-customer-edit/car-customer-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'home/:index', component: HomeComponent},
  { path: 'car/create', component: CarCreateComponent},
  { path: 'car/edit/:index', component: CarEditComponent},
  { path: 'car/customer/:index', component: CarCustomerComponent},
  { path: 'car/customer/edit/:index', component: CarCustomerEditComponent},
  { path: 'employee', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
