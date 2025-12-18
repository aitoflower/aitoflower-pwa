import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { NavigatorComponent } from "../../components/shared/navigator/navigator.component";

@Component({
  selector: 'app-b2b-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    TranslateModule,
    FooterComponent,
    NavigatorComponent
],
  templateUrl: './b2b-landing-page.component.html',
  styleUrls: ['./b2b-landing-page.component.css'],
})
export class B2bLandingPageComponent implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  isMobileMenuOpen = false;

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
