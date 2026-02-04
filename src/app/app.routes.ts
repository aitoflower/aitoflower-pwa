import { Routes } from '@angular/router';
import { LandingPageComponent } from './landings/landing-page/landing-page.component';
import { TermsComponent } from './components/core/terms/terms.component';
import { PrivacyComponent } from './components/core/privacy/privacy.component';
import { B2bLandingPageComponent } from './landings/b2b-landing-page/b2b-landing-page.component';
import { DataApiLandingPageComponent } from './landings/data-api-landing-page/data-api-landing-page.component';

import { Roles } from './model/enums/roles.enum';
import { RoleGuard } from './guards/role-guard';
export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  // Dashboard Routes
  {
    path: 'dashboard',
    data: { breadcrumb: 'BREADCRUMB.DASHBOARD', icon: 'dashboard' },
    loadComponent: () =>
      import('./dashboards/dashboard/dashboard.component').then((m) => m.DashboardComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        data: { breadcrumb: 'BREADCRUMB.HOME', icon: 'home' },
        loadComponent: () =>
          import('./dashboards/dashboard/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'warehouse',
        data: { breadcrumb: 'BREADCRUMB.WAREHOUSE', icon: 'warehouse', roles: [Roles.ADMIN, Roles.SEED, Roles.BUD, Roles.HARVEST, Roles.FARM] },
        loadComponent: () =>
          import('./dashboards/dashboard/warehouse/warehouse.component').then(
            (m) => m.WarehouseComponent
          ),
        canActivate: [RoleGuard],
      },
      {
        path: 'profile',
        data: { breadcrumb: 'BREADCRUMB.PROFILE', icon: 'person' },
        loadComponent: () =>
          import('./components/core/profile/profile.component').then((m) => m.ProfileComponent),
      },
      {
        path: 'data',
        children: [
          {
            path: '',
            data: { breadcrumb: 'BREADCRUMB.DATA', icon: 'data_usage' },
            loadComponent: () =>
              import('./components/core/data/data.component').then((m) => m.DataComponent)
          },
          {
            path: 'terpenes',
            data: { breadcrumb: 'BREADCRUMB.TERPENES', icon: 'science', parent: { label: 'BREADCRUMB.DATA', icon: 'data_usage', url: 'data' } },
            loadComponent: () =>
              import('./components/core/data/terpenes/terpenes.component').then((m) => m.TerpenesComponent)
          },
          {
            path: 'terpenes/:id',
            data: { breadcrumb: 'BREADCRUMB.TERPENE_DETAILS', icon: 'details', parent: { label: 'BREADCRUMB.TERPENES', icon: 'science', url: 'data/terpenes' } },
            loadComponent: () =>
              import('./components/shared/viewers/terpene-info/terpene-info.component').then((m) => m.TerpeneInfoComponent),
          }
        ]
      },
    ],
  },
  // B2B Routes
  { path: 'b2b', component: B2bLandingPageComponent },
  {
    path: 'b2b/dashboard',
    loadComponent: () =>
      import('./dashboards/b2b-dashboard/b2b-dashboard.component').then(
        (m) => m.B2bDashboardComponent
      ),
    canActivate: [RoleGuard],
    data: { roles: [Roles.B2B, Roles.ADMIN] },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./dashboards/dashboard/home/home.component').then((m) => m.HomeComponent),
      },
    ],
  },
  // API Routes
  { path: 'data-api', component: DataApiLandingPageComponent },
  {
    path: 'data-api/dashboard',
    loadComponent: () =>
      import('./dashboards/data-api-dashboard/data-api-dashboard.component').then(
        (m) => m.DataApiDashboardComponent
      ),
    canActivate: [RoleGuard],
    data: { roles: [Roles.DATA_API, Roles.ADMIN] },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./dashboards/dashboard/home/home.component').then((m) => m.HomeComponent),
      },
    ],
  },
  {
    path: 'bo/dashboard',
    loadComponent: () =>
      import('./dashboards/bo-dashboard/bo-dashboard.component').then(
        (m) => m.BoDashboardComponent
      ),
    canActivate: [RoleGuard],
    data: { roles: [Roles.BO, Roles.ADMIN] },
    children: [
      { path: '', redirectTo: 'admin/roles', pathMatch: 'full' },
      {
        path: 'admin/users',
        loadComponent: () =>
          import('./dashboards/bo-dashboard/admin-users/admin-users.component').then(
            (m) => m.AdminUsersComponent
          ),
      },
      {
        path: 'admin/roles',
        loadComponent: () =>
          import('./dashboards/bo-dashboard/admin-roles/admin-roles.component').then(
            (m) => m.AdminRolesComponent
          ),
      },
    ],
  },
];
