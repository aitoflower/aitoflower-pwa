import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../../services/auth.service';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule,
    MatMenuModule,
    RouterLink,
  ],
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent {
  authService = inject(AuthService);
  userMenuButtons = [
    { label: 'APP.MENU.USER.PROFILE', icon: 'account_circle', action: () => {}, link: '/profile' },
    { label: 'APP.MENU.USER.SETTINGS', icon: 'settings', action: () => {}, link: '/settings' },
    { label: 'APP.MENU.USER.LOGOUT', icon: 'logout', action: () => this.logout(), link: null },
  ];

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
