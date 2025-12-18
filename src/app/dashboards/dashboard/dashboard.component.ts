import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card'; // Added for login card
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LanguageSelectorComponent } from '../../components/shared/language-selector/language-selector.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        RouterLink,
        RouterOutlet,
        LanguageSelectorComponent
    ],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    authService = inject(AuthService);
    lastLogin: Date | null = null;

    ngOnInit() {
        this.lastLogin = this.authService.getLastLogin();
    }

    login() {
        this.authService.login();
        this.lastLogin = this.authService.getLastLogin(); // Update local ref
    }

    logout() {
        this.authService.logout();
    }
}
