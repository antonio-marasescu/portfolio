import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationItemType } from '../../../shared/types/navigation/navbar.types';
import { SectionLayoutComponent } from '../../../shared/components/layout/section-layout.component';
import { Work } from '../../../shared/types/cv/cv.types';
import { Cv } from '../../../shared/config/constants/cv/cv.constants';
import { Image } from 'primeng/image';
import { Divider } from 'primeng/divider';
import { Tag } from 'primeng/tag';
import { AnimateOnScroll } from 'primeng/animateonscroll';

@Component({
  selector: 'app-work-container',
  imports: [SectionLayoutComponent, Image, Divider, Tag, AnimateOnScroll],
  templateUrl: './work-container.component.html',
  styles: `
    .material-icons {
      font-size: 10px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkContainerComponent {
  protected readonly CvWork: Work = Cv.work;
  protected readonly NavigationItemType = NavigationItemType;
}
