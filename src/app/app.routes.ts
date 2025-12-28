import { Routes } from '@angular/router';
import { LandingPageComponent } from './landings/landing-page/landing-page.component';
import { TermsComponent } from './components/core/terms/terms.component';
import { PrivacyComponent } from './components/core/privacy/privacy.component';
import { B2bLandingPageComponent } from './landings/b2b-landing-page/b2b-landing-page.component';
import { DataApiLandingPageComponent } from './landings/data-api-landing-page/data-api-landing-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'privacy', component: PrivacyComponent },
    // Dashboard Routes
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboards/dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadComponent: () => import('./dashboards/dashboard/home/home.component').then(m => m.HomeComponent) },
            { path: 'warehouse', loadComponent: () => import('./dashboards/dashboard/warehouse/warehouse.component').then(m => m.WarehouseComponent) },
            { path: 'profile', loadComponent: () => import('./components/core/profile/profile.component').then(m => m.ProfileComponent) },
        ]
    },
    // B2B Routes
    { path: 'b2b', component: B2bLandingPageComponent },
    { path: 'b2b/dashboard',
        loadComponent: () => import('./dashboards/b2b-dashboard/b2b-dashboard.component').then(m => m.B2bDashboardComponent),
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadComponent: () => import('./dashboards/dashboard/home/home.component').then(m => m.HomeComponent) },
        ]
    },
    // API Routes
    { path: 'data-api', component: DataApiLandingPageComponent },
    { path: 'data-api/dashboard',
        loadComponent: () => import('./dashboards/data-api-dashboard/data-api-dashboard.component').then(m => m.DataApiDashboardComponent),
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadComponent: () => import('./dashboards/dashboard/home/home.component').then(m => m.HomeComponent) },
        ]
    },
    { path: 'bo/dashboard',
        loadComponent: () => import('./dashboards/bo-dashboard/bo-dashboard.component').then(m => m.BoDashboardComponent),
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadComponent: () => import('./dashboards/dashboard/home/home.component').then(m => m.HomeComponent) },
        ]
    },
];
