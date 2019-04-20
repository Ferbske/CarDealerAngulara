import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
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

  onRegister() {
    this.authenticationService.signupUser(this.signupForm.value.username, this.signupForm.value.email, this.signupForm.value.password)
      .subscribe(
        (response) => {
          localStorage.setItem('Token', response['token']);
          this.errorcode = 200;
          console.log(this.authenticationService.getToken());
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log(error);
          this.errorcode = 409;
        }
      );
  }

}
