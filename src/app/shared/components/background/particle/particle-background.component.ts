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
  glowingSpots = Array.from({ length: 15 }, (_, index) => {
    const colors = [
      'rgba(59, 130, 246, 0.25)', // blue
      'rgba(147, 51, 234, 0.25)', // purple
      'rgba(177,0,40,0.25)', // red
      'rgba(34, 197, 94, 0.25)', // green
      'rgba(251, 146, 60, 0.25)', // orange
      'rgba(168, 85, 247, 0.25)', // violet
      'rgba(14, 165, 233, 0.25)', // sky blue
      'rgba(16, 185, 129, 0.25)' // emerald
    ];

    const color = colors[index % colors.length];
    const size = 60 + Math.random() * 140;
    const opacity = 0.15 + Math.random() * 0.35;
    const isFloating = Math.random() > 0.6;

    return {
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 6 + Math.random() * 8, // 6-14s
      delay: Math.random() * 4, // 0-4s delay
      size,
      opacity,
      color,
      shadow: `0 0 ${size * 0.6}px ${size * 0.3}px ${color}`,
      animationClass: isFloating ? 'animate-spot-float' : 'animate-spot-pulse'
    };
  });
}
