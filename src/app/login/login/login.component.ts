import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService: AuthServiceService,
    private router: Router) { }

  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    console.log('successCallback', data);
    // this.user = data.authResult.user;
    // this.router.navigate(['page']);
    this.authService.login(data);
    this.router.navigate(['/truck-grid']);
  }

  errorCallback(data: FirebaseUISignInFailure) {
    console.warn('errorCallback', data);
  }

  uiShownCallback() {
    console.log('UI shown');
  }
}
