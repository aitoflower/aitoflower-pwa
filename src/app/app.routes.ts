import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { B2bLandingPageComponent } from './b2b-landing-page/b2b-landing-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'business', component: B2bLandingPageComponent },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadComponent: () => import('./dashboard/home/home.component').then(m => m.HomeComponent) },
            { path: 'almacen', loadComponent: () => import('./almacen/almacen.component').then(m => m.AlmacenComponent) }
        ]
    }
];
