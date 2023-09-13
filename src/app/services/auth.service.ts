import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = new BehaviorSubject<any>({});
  user$ = this.user.asObservable();

  constructor(private afAuth: AngularFireAuth) { }

  login(data: FirebaseUISignInSuccessWithAuthResult) {
    this.user.next(data);
  }

  logout() {
    this.afAuth.signOut();
    this.user.next(null);
  }
}
