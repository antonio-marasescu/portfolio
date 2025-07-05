import { Routes } from '@angular/router';
import { AppRoutes } from './shared/types/navigation/app-routes.types';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.Home
  },
  {
    path: AppRoutes.Home,
    loadComponent: () =>
      import('./components/pages/home/home-page.component').then(mod => mod.HomePageComponent)
  },
  {
    path: '**',
    redirectTo: AppRoutes.Home
  }
];
