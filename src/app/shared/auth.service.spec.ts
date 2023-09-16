import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase)
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
