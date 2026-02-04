import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { RoleOption } from '../../../model/interfaces/role-option.interface';
import { Roles } from '../../../model/enums/roles.enum';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../services/auth.service';
import { RoleConstants } from '../../../model/constants/role.constants';
import { RolesService } from '../../../services/roles.service';

@Component({
  selector: 'app-admin-roles',
  templateUrl: './admin-roles.component.html',
  styleUrls: ['./admin-roles.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRolesComponent implements OnInit {
  authService = inject(AuthService);
  rolesService = inject(RolesService);
  private _snackBar = inject(MatSnackBar);
  isCurrentUserAdmin = computed(() => this.authService.hasRole(Roles.ADMIN));

  readonly availableRoles: RoleOption[] = RoleConstants.roles;

  userUid = signal('');
  userRoles = signal([] as Roles[]);
  assignRolesPayload = computed(() => ({
    uid: this.userUid(),
    roles: this.userRoles(),
  }));
  isSelected = computed(() => (role: Roles) => this.userRoles().includes(role));
  isDisabled = computed(() => (role: Roles) => role === Roles.ADMIN && !this.isCurrentUserAdmin());

  _loading = signal(false);
  _rolesLoaded = signal(false);

  ngOnInit(): void {
    // Inicialización si es necesaria
  }
  onUidInput(value: string): void {
    // reset inmediato al cambiar el texto
    this._rolesLoaded.set(false);
    this.userRoles.set([]);
    this.userUid.set('');
    const uid = value.trim();
    this.userUid.set(uid);
  }
  search(): void {
    this._loading.set(true);
    const uid = this.userUid().trim();
    if (!uid) {
      this._rolesLoaded.set(true);
      this._loading.set(false);
      return;
    }
    this.fetchRolesForUid(uid);
  }

  private fetchRolesForUid(uid: string): void {
    this.rolesService.getRoles(uid).subscribe({
    next: (rolesFromBackend: Roles[]) => {
      this.userRoles.set(rolesFromBackend);
      console.log('Roles loaded for', uid);
      this._rolesLoaded.set(true);
      this._loading.set(false);
    },
    error: (error) => {
      console.error('Error loading roles:', error);
      this._snackBar.open(error.error.message, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
      this._loading.set(false);
      this._rolesLoaded.set(false);
    }
  });
  }

  toggle(role: Roles): void {
    const current = this.userRoles();
    const updated = current.includes(role) ? current.filter((r) => r !== role) : [...current, role];
    this.userRoles.set(updated);
  }

  submit(): void {
    const uid = this.userUid().trim();
    if (!uid) return; // evita envío inválido
    console.log('Submitting role assigment with payload:', this.assignRolesPayload());
    this.rolesService.assignRoles(this.assignRolesPayload()).subscribe({
      next: () => {
        console.log('Roles assigned successfully');
        this._snackBar.open('Roles asignados correctamente', 'OK', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      error: (error) => {
        console.error('Error assigning roles:', error);
        this._snackBar.open(error.error.message, 'OK', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
    });
  }

  compareRoles(r1: Roles, r2: Roles): boolean {
    return r1 === r2;
  }

  onRolesChanged(event: any): void {
    this.userRoles.set(event.value);
  }
}
