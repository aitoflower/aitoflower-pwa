import { ThemeOptions } from './../../interfaces/theme-options.enum';
import { Component, inject } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { SidenavListComponent } from '../../components/shared/sidenav-list/sidenav-list.component';
import { ToolbarComponent } from '../../components/shared/toolbar/toolbar.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-data-api-dashboard',
  imports: [CommonModule, MatSidenavModule, RouterOutlet, ToolbarComponent, SidenavListComponent, FooterComponent],
  templateUrl: './data-api-dashboard.component.html',
  styleUrl: './data-api-dashboard.component.scss',
})
export class DataApiDashboardComponent {
  themeOption: ThemeOptions = ThemeOptions.DATA_API;
  themeService = inject(ThemeService);
  sidenavService = inject(SidenavService);
  titleService = inject(Title);
  constructor() {
    this.themeService.toggleTheme(this.themeOption);
    this.titleService.setTitle('AIToFlower Data API');
  }
}
