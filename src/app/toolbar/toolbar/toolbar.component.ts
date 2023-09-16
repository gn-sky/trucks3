import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() title = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login = () => {
    this.router.navigateByUrl('login');
  }

  logout = () => {
    this.authService.logout();
    this.router.navigateByUrl('truck-grid');
  }
}
