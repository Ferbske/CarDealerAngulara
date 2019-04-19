import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class AuthService {
  url: String = 'https://cardealer-api.herokuapp.com';

  constructor(private http: HttpClient, private router: Router) {
  }

  signupUser(username: string, email: string, password: string) {
     return this.http.post(this.url + '/register',
      {
        username: username,
        email: email,
        password: password
      });
  }

  signinUser(username: string, password: string) {
    return this.http.post(this.url + '/login',
      {
        username: username,
        password: password
      });
  }

  logout() {
    localStorage.removeItem('Token');
    this.router.navigate(['/signin']);
  }

  getToken() {
    return localStorage.getItem('Token');
  }

  isAuthenticated() {
    return localStorage.getItem('Token') != null;
  }
}
