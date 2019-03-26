import { Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {

    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  /*
  * Email / password Auth
  * */
  emailSignUp(email:  string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
      })
      .catch(error => {
        console.log('error while Signup', error.message);
      });
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.authState = res.user;
      });
  }


  /*Google login*/
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  /*facebook login*/
  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) =>  {
        this.authState = credential.user;
      })
      .catch(error => console.log(error));
  }


  /*Sign out*/

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

}


export class EmailValidator {
  static isValid(control: FormControl) {
    const reg = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = reg.test(control.value);
    if (valid) {
      return null;
    }
    return {'invalidEmail': true};
  }
}

export class PasswordValidator {
  static isValid(control: FormControl) {
    const reg = /^(?=.{6,})/;
    const valid = reg.test(control.value);
    if (valid) {
      return null;
    }
    return {
      'invalidPassword': true
    };
  }
}
