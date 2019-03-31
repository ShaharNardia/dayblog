import { Component, OnInit, NgZone } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticate: AuthenticationService, private route: Router, private zone: NgZone) { }

  ngOnInit() {
    this.authenticate.signOut();
  }
  fbLogin() {
    this.authenticate.facebookLogin().then((res) => {
      this.zone.run(() => this.route.navigate(['/home']));
    });

  }

  gLogin() {
    this.authenticate.googleLogin().then((res) => {
      this.zone.run(() => this.route.navigate(['/home']));
    });
  }
}
