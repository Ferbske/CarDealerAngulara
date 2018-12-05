import { CustomerModel } from "../customer/customer.model";
import { EmployeeModel } from "../employee/employee.model";

export class CarModel {
  public chassisNumber: number;
  public brand: string;
  public fuelType: string;
  public typeCar: string;
  public soldBy: EmployeeModel;
  public ownedBy: CustomerModel;

  constructor(chassisNumber: number, brand: string, fuelType: string, typeCar: string) {
    this.chassisNumber = chassisNumber;
    this.brand = brand;
    this.fuelType = fuelType;
    this.typeCar = typeCar;
  }
}

