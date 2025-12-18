import { Component, OnInit, inject } from '@angular/core';
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
export class HomeComponent implements OnInit {
    authService = inject(AuthService);
    lastLogin: Date | null = null;

    ngOnInit() {
        this.lastLogin = this.authService.getLastLogin();
    }

    login() {
        this.authService.login();
        this.lastLogin = this.authService.getLastLogin();
    }
}
