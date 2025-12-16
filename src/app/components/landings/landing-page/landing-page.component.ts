import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { RouterLink } from '@angular/router';
import { LanguageSelectorComponent } from '../../shared/language-selector/language-selector.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterLink,
    LanguageSelectorComponent,
    TranslateModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  showBackToTop = false;
  isMobileMenuOpen = false;


  constructor(private translate: TranslateService) {}

  ngOnInit() {
    console.log('currentLang', this.translate.currentLang);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showBackToTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
