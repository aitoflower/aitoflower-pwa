import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'privacy', component: PrivacyComponent }
];
