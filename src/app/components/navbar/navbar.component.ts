import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any = { photoUrl: '', displayName: '' };
  constructor(private authenticate: AuthenticationService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log('change');
    if (this.authenticate.authenticated) {
      console.log(this.authenticate.currentUser);
      this.user = this.authenticate.currentUser;
    }
  }

}
