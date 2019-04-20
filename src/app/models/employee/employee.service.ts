import {Injectable} from '@angular/core';
import 'rxjs-compat/add/operator/map';
import {AuthService} from '../../components/auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class EmployeeService {
  private headers = {
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Token': this.authenticationService.getToken()
    }
  };

  constructor(private http: HttpClient, private authenticationService: AuthService) {
  }

  getEmployees() {
    return this.http.get<any>('https://cardealer-api.herokuapp.com/employee', this.headers);
  }

  getAEmployee(id: string) {
    return this.http.get<any>('https://cardealer-api.herokuapp.com/employee/' + id, this.headers)
      .map(
        (response) => {
          return response.results[0];
        }
      );
  }

  addEmployee(firstName: string, lastName: string, department: string, job: string) {
    return this.http.post('https://cardealer-api.herokuapp.com/employee', {
      'firstName': firstName,
      'lastName': lastName,
      'department': department,
      'job': job
    }, this.headers);
  }

  editEmployee(id: string, firstName: string, lastName: string, department: string, job: string) {
    return this.http.put('https://cardealer-api.herokuapp.com/employee', {
      'employeeID': id,
      'newFirstName': firstName,
      'newLastName': lastName,
      'newDepartment': department,
      'newJob': job
    }, this.headers);
  }

  deleteEmployee(id: string) {
    return this.http.delete('https://cardealer-api.herokuapp.com/employee/' + id, this.headers);
  }
}
