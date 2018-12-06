export class EmployeeModel {
  public firstName: string;
  public lastName: string;
  public department: string;
  public job: string;

  constructor(firstName: string, lastName: string, department: string, job: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.job = job;
  }
}
