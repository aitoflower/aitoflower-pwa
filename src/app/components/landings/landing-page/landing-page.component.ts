import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { PartnersComponent } from './partners/partners.component';
import { HeroComponent } from "./hero/hero.component";
import { ProblemSolutionComponent } from "./problem-solution/problem-solution.component";
import { FeaturesComponent } from "./features/features.component";
import { HowWhyComponent } from './how-why/how-why.component';
import { PricingComponent } from './pricing/pricing.component';
import { NewsletterComponent } from "./newsletter/newsletter.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { BackToTopComponent } from "./back-to-top/back-to-top.component";
import { NavigatorComponent } from '../../shared/navigator/navigator.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    TranslateModule,
    PartnersComponent,
    HeroComponent,
    ProblemSolutionComponent,
    FeaturesComponent,
    HowWhyComponent,
    PricingComponent,
    NewsletterComponent,
    FooterComponent,
    BackToTopComponent,
    NavigatorComponent
],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  constructor() {}
}
