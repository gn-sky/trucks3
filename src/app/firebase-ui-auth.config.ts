import { firebase, firebaseui, FirebaseUIModule } from 'firebaseui-angular';

export const firebaseUiAuthConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    // all options here: https://github.com/RaphaelJenni/FirebaseUI-Angular/blob/master/README.MD
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
  };
