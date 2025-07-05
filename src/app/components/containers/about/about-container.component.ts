import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionLayoutComponent } from '../../../shared/components/layout/section-layout.component';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { Image } from 'primeng/image';
import { Card } from 'primeng/card';
import { About } from '../../../shared/types/cv/cv.types';
import { Cv } from '../../../shared/config/constants/cv/cv.constants';
import { NavigationItemType } from '../../../shared/types/navigation/navbar.types';
import { Tag } from 'primeng/tag';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'app-about-container',
  imports: [SectionLayoutComponent, AnimateOnScroll, Image, Card, Tag, Divider],
  templateUrl: './about-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutContainerComponent {
  protected readonly CvAbout: About = Cv.about;
  protected readonly NavigationItemType = NavigationItemType;
}
