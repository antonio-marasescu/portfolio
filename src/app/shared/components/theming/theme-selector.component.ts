import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { AppTheme } from '../../types/theming/theming.types';
import { Button } from 'primeng/button';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-theme-selector',
  imports: [Button, Ripple],
  template: `
    @if (theme() === AppTheme.Light) {
      <p-button
        pRipple
        [text]="true"
        [rounded]="true"
        severity="info"
        (onClick)="onThemeChange(AppTheme.Dark)"
      >
        <ng-template #icon>
          <span class="material-icons">dark_mode</span>
        </ng-template>
      </p-button>
    } @else {
      <p-button
        pRipple
        [text]="true"
        [rounded]="true"
        severity="warn"
        (onClick)="onThemeChange(AppTheme.Light)"
      >
        <ng-template #icon>
          <span class="material-icons">light_mode</span>
        </ng-template>
      </p-button>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSelectorComponent {
  protected theme = signal<AppTheme>(this.getInitialTheme());
  protected readonly AppTheme = AppTheme;

  constructor() {
    effect(() => {
      const current = this.theme();
      this.setBodyThemeClass(current);
      localStorage.setItem('theme', current);
    });
  }

  protected onThemeChange(theme: AppTheme) {
    this.theme.set(theme);
  }

  private getInitialTheme(): AppTheme {
    const saved = localStorage.getItem('theme') as AppTheme;
    if (saved) {
      return saved;
    }

    // Check user's system preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? AppTheme.Dark : AppTheme.Dark; // Default to dark mode
  }

  private setBodyThemeClass(theme: AppTheme) {
    const darkClass = 'portfolio-dark';
    const html = document.querySelector('html');
    if (!html) return;

    if (theme === AppTheme.Dark) {
      html.classList.add(darkClass);
    } else {
      html.classList.remove(darkClass);
    }
  }
}
