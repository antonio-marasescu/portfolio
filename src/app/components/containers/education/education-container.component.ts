import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationItemType } from '../../../shared/types/navigation/navbar.types';
import { SectionLayoutComponent } from '../../../shared/components/layout/section-layout.component';
import { Education } from '../../../shared/types/cv/cv.types';
import { Cv } from '../../../shared/config/constants/cv/cv.constants';
import { Tag } from 'primeng/tag';
import { Divider } from 'primeng/divider';
import { AnimateOnScroll } from 'primeng/animateonscroll';

@Component({
  selector: 'app-education-container',
  imports: [SectionLayoutComponent, Tag, Divider, AnimateOnScroll],
  templateUrl: './education-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationContainerComponent {
  protected readonly CvEducation: Education = Cv.education;
  protected readonly NavigationItemType = NavigationItemType;
}
