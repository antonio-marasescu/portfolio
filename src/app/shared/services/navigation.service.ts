import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../types/navigation/app-routes.types';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  protected readonly router = inject(Router);

  public navigateOutside(url: string): void {
    window.open(url, '_blank');
  }

  public async navigateInside(route: AppRoutes): Promise<void> {
    await this.router.navigate([route]);
  }

  public scrollToSection(id: string): void {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  }
}
