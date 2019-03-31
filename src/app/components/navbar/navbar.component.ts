import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any = {};
  constructor(private authenticate: AuthenticationService) {}

  ngOnInit() {
    this.user = this.authenticate.loggedInUser;
    console.log(this.user.user.displayName);
  }

}
