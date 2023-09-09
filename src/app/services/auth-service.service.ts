import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  // private user = new Subject<any>();
  private user = new BehaviorSubject<any>({});
  user$ = this.user.asObservable();

  // constructor(private afAuth: AngularFireAuth) { }
  constructor(private afAuth: AngularFireAuth) { }

  // login(): Observable<any> {
  login(data: FirebaseUISignInSuccessWithAuthResult) {
    // const  this.afAuth.authState;    
    // this.user.next(this.afAuth.authState);
    // this.user.next(data);
    this.user.next(data);
  }

  logout() {
    this.afAuth.signOut();
    this.user.next(null);
  }
}
