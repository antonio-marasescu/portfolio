import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-particle-background',
  imports: [NgStyle],
  template: `
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      @for (spot of glowingSpots; track spot.id) {
        <div
          [class]="spot.animationClass"
          class="absolute rounded-full blur-xl"
          [style.left.%]="spot.left"
          [style.top.%]="spot.top"
          [style.width.px]="spot.size"
          [style.height.px]="spot.size"
          [style.opacity]="spot.opacity"
          [style.animation-duration]="spot.duration + 's'"
          [style.animation-delay]="spot.delay + 's'"
          [ngStyle]="{
            background: spot.color,
            'box-shadow': spot.shadow
          }"
        ></div>
      }
    </div>
  `,
  styleUrl: 'particle-background.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticleBackgroundComponent {
  protected readonly glowingSpots = Array.from({ length: 8 }, (_, index) => {
    const colors = [
      'oklch(0.7 0.2 240 / 0.25)', // blue - more vibrant
      'oklch(0.65 0.25 280 / 0.25)', // purple - richer
      'oklch(0.6 0.3 15 / 0.25)', // red - more saturated
      'oklch(0.75 0.2 140 / 0.25)', // green - brighter
      'oklch(0.7 0.25 45 / 0.25)', // orange - more vivid
      'oklch(0.6 0.3 300 / 0.25)', // violet - deeper
      'oklch(0.8 0.15 200 / 0.25)', // sky blue - lighter
      'oklch(0.7 0.2 160 / 0.25)' // emerald - more natural
    ];

    const color = colors[index % colors.length];
    const size = 60 + Math.random() * 140;
    const opacity = 0.15 + Math.random() * 0.35;
    const isFloating = Math.random() > 0.6;

    return {
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 6 + Math.random() * 6, // 6-14s
      delay: Math.random() * 2, // 0-4s delay
      size,
      opacity,
      color,
      shadow: `0 0 ${size * 0.4}px ${size * 0.2}px ${color}`,
      animationClass: isFloating ? 'animate-spot-float' : 'animate-spot-pulse'
    };
  });
}
