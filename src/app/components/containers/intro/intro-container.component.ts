import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TypewriterComponent } from '../../../shared/components/effects/typewriter/typewriter.component';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { SectionLayoutComponent } from '../../../shared/components/layout/section-layout.component';
import { Cv } from '../../../shared/config/constants/cv/cv.constants';
import { Intro } from '../../../shared/types/cv/cv.types';
import { NavigationItemType } from '../../../shared/types/navigation/navbar.types';
import { NavigationService } from '../../../shared/services/navigation.service';
import { downloadFileByUrl } from '../../../shared/utils/files.utils';
import { CvUrl } from '../../../shared/config/constants/app.constants';

@Component({
  selector: 'app-intro-container',
  imports: [TypewriterComponent, Button, Tag, SectionLayoutComponent],
  templateUrl: 'intro-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroContainerComponent {
  protected readonly CvIntro: Intro = Cv.intro;
  protected readonly NavigationItemType = NavigationItemType;
  private readonly navigationService = inject(NavigationService);

  protected onLinkEvent(url: string): void {
    if (!url) {
      return;
    }
    this.navigationService.navigateOutside(url);
  }

  protected async onDownloadCv(): Promise<void> {
    await downloadFileByUrl(CvUrl, CvUrl);
  }
}
