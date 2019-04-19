import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() apptitle: string;

  constructor(public authenticationService: AuthService) { }

  ngOnInit() {
  }

  logOut(){
    this.authenticationService.logout();
    this.ngOnInit();
  }
}
