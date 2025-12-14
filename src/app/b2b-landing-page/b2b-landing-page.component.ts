import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-b2b-landing-page',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, RouterLink],
    templateUrl: './b2b-landing-page.component.html',
    styleUrls: ['./b2b-landing-page.component.css']
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
