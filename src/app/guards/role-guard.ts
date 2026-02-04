import { Injectable, effect, inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Roles } from '../model/enums/roles.enum';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  authService = inject(AuthService);
  router = inject(Router);

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    // Espera a que el usuario y sus claims se carguen
    await this.waitForUserAndClaims();

    // Si no hay usuario, redirige a login
    if (!this.authService.user()) {
      this.router.navigate(['/']);
      return false;
    }

    const requiredRoles: Roles[] = route.data['roles'] || [];
    if (requiredRoles.length === 0) {
      return true;
    }

    const hasRequiredRole = requiredRoles.some((role) => this.authService.hasRole(role));

    if (hasRequiredRole) {
      return true;
    }

    // Redirige si no tiene el rol requerido
    this.router.navigate(['/']);
    return false;
  }

  private waitForUserAndClaims(): Promise<void> {
    return new Promise((resolve) => {
      // Si ya hay usuario y claims, resuelve inmediatamente
      if (this.authService.user() && this.authService.claims()) {
        resolve();
        return;
      }

      // Espera a que ambos estén disponibles
      const checkInterval = setInterval(() => {
        if (this.authService.user() && this.authService.claims()) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 100);

      // Timeout de 10 segundos
      setTimeout(() => {
        clearInterval(checkInterval);
        resolve();
      }, 10000);
    });
  }
}
