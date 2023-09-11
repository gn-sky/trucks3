import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FirebaseUIModule } from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { firebaseUiAuthConfig } from '../../firebase-ui-auth.config';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        FirebaseUIModule.forRoot(firebaseUiAuthConfig)
      ],
      declarations: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
