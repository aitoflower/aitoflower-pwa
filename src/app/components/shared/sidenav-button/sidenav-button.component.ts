import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { SidenavService } from '../../../services/sidenav.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidenav-button',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule
],
  templateUrl: './sidenav-button.component.html',
  styleUrls: ['./sidenav-button.component.css']
})
export class SidenavButtonComponent implements OnInit {

    authService = inject(AuthService);
    sidenavService = inject(SidenavService);
    ngOnInit(): void {}

}
