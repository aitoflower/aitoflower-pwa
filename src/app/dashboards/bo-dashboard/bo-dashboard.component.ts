import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { SidenavListComponent } from '../../components/shared/sidenav-list/sidenav-list.component';
import { ToolbarComponent } from '../../components/shared/toolbar/toolbar.component';
import { ThemeOptions } from '../../interfaces/theme-options.enum';
import { SidenavService } from '../../services/sidenav.service';
import { ThemeService } from '../../services/theme.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bo-dashboard',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, RouterOutlet, ToolbarComponent, SidenavListComponent, FooterComponent],
  templateUrl: './bo-dashboard.component.html',
  styleUrls: ['./bo-dashboard.component.css']
})
export class BoDashboardComponent {
  themeOption: ThemeOptions = ThemeOptions.BO;
  sidenavService = inject(SidenavService);
  themeService = inject(ThemeService);
  titleService = inject(Title);
  constructor() {
    this.themeService.toggleTheme(this.themeOption);
    this.titleService.setTitle('AIToFlower BackOffice');
  }
}
