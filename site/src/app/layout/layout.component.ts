import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isDesktop = window.innerWidth >= 900;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  @HostListener('window:resize')
  onResize() {
    this.isDesktop = window.innerWidth >= 900;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
