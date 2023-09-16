import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router) { }
  
  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    this.authService.login(data);
    this.router.navigateByUrl('truck-grid');
  }

  errorCallback(data: FirebaseUISignInFailure) {
    console.warn('login errorCallback', data);
  }
}
