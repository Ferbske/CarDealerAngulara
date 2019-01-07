import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthService]
})

export class SigninComponent implements OnInit {
  errorcode: number;

  constructor(private authenticationService: AuthService) { }

  ngOnInit() {
  }

  onLogin(username: string, password: string) {
    this.errorcode = this.authenticationService.signinUser(username, password);
    console.log(this.errorcode);
  }
}
