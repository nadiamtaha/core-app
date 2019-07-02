import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './core';
import { AuthLayoutComponent } from './core';
import { AuthGuard } from './_services/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './account/account.module#AccountModule'
      },
      
      {
        path: 'error',
        loadChildren: './error/error.module#ErrorModule'
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'viewMap',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'user-checkin',
        loadChildren: './user-checkin/user-checkin.module#UserCheckinModule'
      },
      {
        path: 'user-management',
        loadChildren: './user-management/user-management.module#UserManagementModule'
      },
      {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
      },
      {
        path: 'requests',
        loadChildren: './requests/requests.module#RequestsModule'
      },
      // {
      //   path: 'maps',
      //   loadChildren: './maps/maps.module#MapsModule'
      // },
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
     
      {
        path: 'error',
        loadChildren: './error/error.module#ErrorModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];
