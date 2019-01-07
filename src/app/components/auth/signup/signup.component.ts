import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})

export class SignupComponent implements OnInit {
  errorcode: any;

  constructor(private authenticationService: AuthService) { }

  ngOnInit() {
  }

  onRegister(username: string, email: string, password: string){
    this.errorcode = this.authenticationService.signupUser(username, email, password);
  }

}
