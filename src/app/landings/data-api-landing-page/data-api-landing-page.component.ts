import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';
import { NavigatorComponent } from "../../components/shared/navigator/navigator.component";
import { FooterComponent } from "../../components/shared/footer/footer.component";
import { Title } from '@angular/platform-browser';
import { ThemeOptions } from '../../interfaces/theme-options.enum';
import { SidenavService } from '../../services/sidenav.service';
import { ThemeService } from '../../services/theme.service';
import { NewsletterComponent } from '../../components/core/newsletter/newsletter.component';

@Component({
  selector: 'app-api-landing',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    NavigatorComponent,
    FooterComponent,
    NewsletterComponent
],
  templateUrl: './data-api-landing-page.component.html',
  styleUrls: ['./data-api-landing-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataApiLandingPageComponent {
  themeOption: ThemeOptions = ThemeOptions.DATA_API;
  themeService = inject(ThemeService);
  titleService = inject(Title);
  constructor() {
    this.themeService.toggleTheme(this.themeOption);
    this.titleService.setTitle('AIToFlower Data API');
  }

  valueProps = [
    {
      icon: 'rocket_launch',
      title: 'Integra datos en minutos',
      text: 'Conecta tu producto a datos web estructurados sin scraping ni mantenimiento.'
    },
    {
      icon: 'verified',
      title: 'Datos listos para producción',
      text: 'Información normalizada, consistente y preparada para entornos reales.'
    },
    {
      icon: 'autorenew',
      title: 'Actualización continua',
      text: 'Los datos se mantienen al día sin que tengas que preocuparte por nada.'
    },
    {
      icon: 'groups',
      title: 'Pensada para equipos',
      text: 'Ideal para startups, SaaS y empresas que quieren centrarse en su negocio.'
    }
  ];

  useCases = [
    'Enriquecer catálogos de productos',
    'Mostrar estadísticas y tendencias',
    'Comparadores y dashboards',
    'Aplicaciones basadas en datos'
  ];

  pricingPlans = [
    {
      name: 'Starter',
      price: '29€',
      period: '/mes',
      highlight: false,
      description: 'Perfecto para lanzar un MVP o validar una idea.',
      features: [
        '20.000 requests / mes',
        'Datos esenciales',
        'Actualización periódica',
        '1 API Key',
        'Soporte community'
      ]
    },
    {
      name: 'Pro',
      price: '99€',
      period: '/mes',
      highlight: true,
      description: 'La opción más elegida para productos en producción.',
      features: [
        '150.000 requests / mes',
        'Catálogos completos',
        'Estadísticas avanzadas',
        'Cache prioritario',
        '3 API Keys',
        'Soporte por email'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Desde 399€',
      period: '/mes',
      highlight: false,
      description: 'Para empresas que basan su producto en datos.',
      features: [
        'Volumen a medida',
        'Datos exclusivos',
        'SLA garantizado',
        'Scopes personalizados',
        'Soporte dedicado'
      ]
    }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
