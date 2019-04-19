import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthService]
})

export class SigninComponent implements OnInit {
  @ViewChild('f') signinForm: NgForm;
  errorcode: number;

  constructor(private authenticationService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.authenticationService.signinUser(this.signinForm.value.username, this.signinForm.value.password)
      .subscribe(
        (response) => {
          localStorage.setItem('Token', response.token);
          this.router.navigate(['/home']);
          this.errorcode = 200;
        },
        (error) => {
          console.log(error);
          this.errorcode = error.status;
        }
      );
  }
}
