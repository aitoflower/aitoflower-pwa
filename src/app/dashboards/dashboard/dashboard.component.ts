import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToolbarComponent } from '../../components/shared/toolbar/toolbar.component';
import { SidenavListComponent } from '../../components/shared/sidenav-list/sidenav-list.component';
import { FooterComponent } from "../../components/shared/footer/footer.component";
import { SidenavService } from '../../services/sidenav.service';
import { ThemeService } from '../../services/theme.service';
import { ThemeOptions } from '../../interfaces/theme-options.enum';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, RouterOutlet, ToolbarComponent, SidenavListComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  themeOption: ThemeOptions = ThemeOptions.DEFAULT;
  authService = inject(AuthService);
  sidenavService = inject(SidenavService);
  themeService = inject(ThemeService);
  titleService = inject(Title);
  constructor() {
    this.themeService.toggleTheme(this.themeOption);
    this.titleService.setTitle('AIToFlower');
  }
}
