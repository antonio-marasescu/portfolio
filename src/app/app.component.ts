import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParticleBackgroundComponent } from './shared/components/background/particle/particle-background.component';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParticleBackgroundComponent, Toast],
  template: ` <app-particle-background />
    <p-toast />
    <router-outlet />`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
