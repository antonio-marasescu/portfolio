import { Routes } from '@angular/router';
import { AppRoutes } from './shared/types/navigation/app-routes.types';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/pages/home/home-page.component').then(mod => mod.HomePageComponent)
  },
  {
    path: '**',
    redirectTo: AppRoutes.Home
  }
];
