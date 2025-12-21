import { ThemeService } from './../../services/theme.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { SidenavListComponent } from '../../components/shared/sidenav-list/sidenav-list.component';
import { ToolbarComponent } from '../../components/shared/toolbar/toolbar.component';
import { SidenavService } from '../../services/sidenav.service';
import { ThemeOptions } from '../../interfaces/theme-options.enum';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-b2b-dashboard',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, RouterOutlet, ToolbarComponent, SidenavListComponent, FooterComponent],
  templateUrl: './b2b-dashboard.component.html',
  styleUrl: './b2b-dashboard.component.scss',
})
export class B2bDashboardComponent {
  themeOption: ThemeOptions = ThemeOptions.B2B;
  sidenavService = inject(SidenavService);
  themeService = inject(ThemeService);
  titleService = inject(Title);
  constructor() {
    this.themeService.toggleTheme(this.themeOption);
    this.titleService.setTitle('AIToFlower B2B');
  }
}
