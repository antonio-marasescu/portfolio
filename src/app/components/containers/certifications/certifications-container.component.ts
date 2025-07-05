import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationItemType } from '../../../shared/types/navigation/navbar.types';
import { SectionLayoutComponent } from '../../../shared/components/layout/section-layout.component';
import { Certifications } from '../../../shared/types/cv/cv.types';
import { Cv } from '../../../shared/config/constants/cv/cv.constants';
import { Divider } from 'primeng/divider';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { Image } from 'primeng/image';
import { Button } from 'primeng/button';
import { NavigationService } from '../../../shared/services/navigation.service';
import { Certification } from '../../../shared/types/cv/cv-certifications.types';

@Component({
  selector: 'app-certifications-container',
  imports: [SectionLayoutComponent, Divider, AnimateOnScroll, Image, Button],
  templateUrl: './certifications-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificationsContainerComponent {
  protected readonly CvCertifications: Certifications = Cv.certifications;
  protected readonly NavigationItemType = NavigationItemType;
  private readonly navigationService = inject(NavigationService);

  protected onVerify(item: Certification): void {
    this.navigationService.navigateOutside(item.url);
  }
}
