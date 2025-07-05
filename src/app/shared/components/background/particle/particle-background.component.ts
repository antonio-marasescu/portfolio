import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-particle-background',
  imports: [NgStyle],
  template: `
    <div class="background">
      @for (particle of particles; track particle.id) {
        <div
          class="particle"
          [style.left.%]="particle.left"
          [style.width.px]="particle.size"
          [style.height.px]="particle.size"
          [style.opacity]="particle.opacity"
          [style.animation-duration]="particle.duration + 's'"
          [ngStyle]="{ '--i': particle.id / 30 }"
        ></div>
      }
    </div>
  `,
  styleUrl: 'particle-background.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticleBackgroundComponent {
  particles = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    left: Math.random() * 100,
    duration: 10 + Math.random() * 10,
    size: 4 + Math.random() * 4, // size between 4 and 10px
    opacity: 0.4 + Math.random() * 0.6 // 0.4 to 1.0
  }));
}
