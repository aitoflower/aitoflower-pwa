import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { LogoComponent } from "../logo/logo.component";
import { ThemeOptions } from '../../../interfaces/theme-options.enum';

@Component({
  selector: 'app-navigator',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    LanguageSelectorComponent,
    TranslateModule,
    LogoComponent
],
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  @Input() type: ThemeOptions = ThemeOptions.DEFAULT;
  isMobileMenuOpen = false;
  constructor() {}
  ngOnInit() {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
