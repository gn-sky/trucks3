import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Observable } from 'rxjs';
// import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { Router } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Trucks';
  // isAuthenticated: Observable<firebase.User | null>;
  // user: Observable<firebase.User | null>;
  user = null;

  constructor(
      private afAuth: AngularFireAuth,
      private router: Router,
      private authService: AuthServiceService,    
    ) {
      // this.isAuthenticated = this.afAuth.authState;
      // this.user = this.authService.getUser();
      this.authService.user$.subscribe((u: any) => {
        console.log('AppComponent constructor new User', u);
        this.user = u;
      })      
  }

  ngOnInit(): void {
    // this.authService.user$.subscribe((u: any) => {
    //   console.log('AppComponent ngOnInit new User', u);
    //   this.user = u;
    // })  
  }

  logout() {
    // this.afAuth.signOut();
    this.authService.logout();
    this.router.navigate(['/']);
    // this.user = null;
  }

  login() {
    // this.user = this.authService.getUser();
  }

  // successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
  //   console.log('successCallback', data);
  //   // this.user = data.authResult.user;
  //   // this.router.navigate(['page']);
  //   this.authService.login(data);
  // }

  // errorCallback(data: FirebaseUISignInFailure) {
  //   console.warn('errorCallback', data);
  // }

  // uiShownCallback() {
  //   console.log('UI shown');
  // }
}
