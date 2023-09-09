import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from "@angular/fire/compat";
// import { AngularFireAuthModule } from "@angular/fire/compat/auth";
// import { firebase, firebaseui, FirebaseUIModule } from 'firebaseui-angular';

import { AppComponent } from './app.component';
import { FeatureTruckGridModule } from './feature-truck-grid/feature-truck-grid.module';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';

// const firebaseUiAuthConfig: firebaseui.auth.Config = {
//   signInFlow: 'popup',
//   // all options here: https://github.com/RaphaelJenni/FirebaseUI-Angular/blob/master/README.MD
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     // {
//     //   scopes: [
//     //     'public_profile',
//     //     'email',
//     //     'user_likes',
//     //     'user_friends'
//     //   ],
//     //   customParameters: {
//     //     'auth_type': 'reauthenticate'
//     //   },
//     //   provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
//     // },
//     // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     // firebase.auth.GithubAuthProvider.PROVIDER_ID,
//     // {
//     //   requireDisplayName: false,
//     //   provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
//     // },
//     // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//     firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
//   ],
//   // tosUrl: '<your-tos-link>',
//   // privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
//   credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
// };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FeatureTruckGridModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
