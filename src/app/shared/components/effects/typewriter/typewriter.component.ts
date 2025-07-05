import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-typewriter',
  imports: [NgClass],
  template: `
    <div class="typewriter" [ngClass]="extraClasses()">
      @for (letter of letters(); track letter; let i = $index) {
        <span class="typewriter-letter" [style.animation-delay]="i * 0.05 + 's'">{{ letter }}</span>
      }
    </div>
  `,
  styleUrl: 'typewriter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypewriterComponent {
  text = input.required<string>();
  extraClasses = input<string[]>([]);
  protected letters = computed(() => this.text().split(''));
}
