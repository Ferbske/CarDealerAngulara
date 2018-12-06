export class CustomerModel {
  public firstName: string;
  public lastName: string;
  public age: number;
  public street: string;
  public houseNumber: number;
  public postalCode: string;

  constructor(firstName: string, lastName: string, age: number, street: string, houseNumber: number, postalCode: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.street = street;
    this.houseNumber = houseNumber;
    this.postalCode = postalCode;
  }
}
