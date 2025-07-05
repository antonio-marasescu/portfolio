import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NavigationItemType } from '../../types/navigation/navbar.types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-section-layout',
  imports: [NgClass],
  template: `
    <section
      [id]="'section-' + id()"
      class="h-full"
      [ngClass]="{
        'min-h-screen': fullscreen()
      }"
    >
      <ng-content select="[content]"></ng-content>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionLayoutComponent {
  id = input.required<NavigationItemType>();
  fullscreen = input<boolean>(false);
}
