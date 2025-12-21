import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PartnersComponent } from './partners/partners.component';
import { HeroComponent } from "./hero/hero.component";
import { ProblemSolutionComponent } from "./problem-solution/problem-solution.component";
import { FeaturesComponent } from "./features/features.component";
import { HowWhyComponent } from './how-why/how-why.component';
import { PricingComponent } from './pricing/pricing.component';
import { NewsletterComponent } from "../../components/core/newsletter/newsletter.component";
import { FooterComponent } from "../../components/shared/footer/footer.component";
import { BackToTopComponent } from "./back-to-top/back-to-top.component";
import { NavigatorComponent } from '../../components/shared/navigator/navigator.component';
import { Title } from '@angular/platform-browser';
import { ThemeOptions } from '../../interfaces/theme-options.enum';
import { ThemeService } from '../../services/theme.service';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
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
  themeOption: ThemeOptions = ThemeOptions.DEFAULT;
  themeService = inject(ThemeService);
  titleService = inject(Title);
  constructor() {
    this.themeService.toggleTheme(this.themeOption);
    this.titleService.setTitle('AIToFlower');}
}
