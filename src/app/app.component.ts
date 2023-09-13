import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trucks';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('truck-grid');
  }
}
