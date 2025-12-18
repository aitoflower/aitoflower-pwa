import { Routes } from '@angular/router';
import { LandingPageComponent } from './landings/landing-page/landing-page.component';
import { TermsComponent } from './components/core/terms/terms.component';
import { PrivacyComponent } from './components/core/privacy/privacy.component';
import { B2bLandingPageComponent } from './landings/b2b-landing-page/b2b-landing-page.component';
import { ApiLandingPageComponent } from './landings/api-landing-page/api-landing-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'b2b', component: B2bLandingPageComponent },
    { path: 'api', component: ApiLandingPageComponent },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboards/dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadComponent: () => import('./dashboards/dashboard/home/home.component').then(m => m.HomeComponent) },
            { path: 'warehouse', loadComponent: () => import('./dashboards/dashboard/warehouse/warehouse.component').then(m => m.WarehouseComponent) }
        ]
    }
];
