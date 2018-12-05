import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { CarCreateComponent } from "./components/car-create/car-create.component";
import { CarEditComponent } from "./components/car-edit/car-edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'car/create', component: CarCreateComponent},
  { path: 'car/edit', component: CarEditComponent},
  { path: 'employee', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
