import { Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent  {
    authService = inject(AuthService);

  // ─────────────────────────────
  // Signals / computed
  // ─────────────────────────────
  readonly user = this.authService.user;

  readonly lastLogin = computed(() => {
    const u = this.user();
    return u?.metadata.lastSignInTime
      ? new Date(u.metadata.lastSignInTime)
      : null;
  });

  // ─────────────────────────────
  // Métodos
  // ─────────────────────────────
  login(): void {
    this.authService.loginWithGoogle();
    // No hace falta setear lastLogin manualmente
  }

}
