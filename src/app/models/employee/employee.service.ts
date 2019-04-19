import {Injectable} from '@angular/core';
import 'rxjs-compat/add/operator/map';
import {Headers, Http} from '@angular/http';
import {AuthService} from '../../components/auth/auth.service';

@Injectable({
  providedIn: 'root',
})

export class EmployeeService {

  constructor(private http: Http, private authenticationService: AuthService) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    headers.append('X-Access-Token', this.authenticationService.getToken());
  }

  getEmployees() {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get('https://cardealer-api.herokuapp.com/employee', {
      headers: headers
    })
      .map(
        (response) => {
          return response.json().results;
        }
      );
  }

  getAEmployee(id: string) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get('https://cardealer-api.herokuapp.com/employee/' + id, {
      headers: headers
    })
      .map(
        (response) => {
          return response.json().results;
        }
      );
  }

  addEmployee(firstName: string, lastName: string, department: string, job: string) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post('https://cardealer-api.herokuapp.com/employee', {
      'firstName': firstName,
      'lastName': lastName,
      'department': department,
      'job': job
    }, {
      headers: headers
    });
  }

  editEmployee(id: string, firstName: string, lastName: string, department: string, job: string){
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put('https://cardealer-api.herokuapp.com/employee', {
      'employeeID': id,
      'newFirstName': firstName,
      'newLastName': lastName,
      'newDepartment': department,
      'newJob': job
    }, {
      headers: headers
    });
  }

  deleteEmployee(id: string) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete('https://cardealer-api.herokuapp.com/employee/' + id);
  }
}
