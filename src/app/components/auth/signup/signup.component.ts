import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})

export class SignupComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  errorcode: number;

  constructor(private authenticationService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegister(){
    this.authenticationService.signupUser(this.signupForm.value.username, this.signupForm.value.email, this.signupForm.value.password)
      .subscribe(
        (res) => {
          localStorage.setItem('Token', res.token);
          this.router.navigate(['/home']);
          this.errorcode = 200;
        },
        (error) => {
          console.log(error);
          this.errorcode = 409;
        }
      );
  }

}
