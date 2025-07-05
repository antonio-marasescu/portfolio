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
        icon="pi pi-moon"
        severity="info"
        [text]="true"
        [rounded]="true"
        (onClick)="onThemeChange(AppTheme.Dark)"
      />
    } @else {
      <p-button
        pRipple
        icon="pi pi-sun"
        severity="warn"
        [text]="true"
        [rounded]="true"
        (onClick)="onThemeChange(AppTheme.Light)"
      />
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
    return saved ?? AppTheme.Light;
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
