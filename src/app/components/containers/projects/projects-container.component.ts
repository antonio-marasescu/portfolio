import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationItemType } from '../../../shared/types/navigation/navbar.types';
import { SectionLayoutComponent } from '../../../shared/components/layout/section-layout.component';
import { Projects } from '../../../shared/types/cv/cv.types';
import { Cv } from '../../../shared/config/constants/cv/cv.constants';
import { Tag } from 'primeng/tag';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { Divider } from 'primeng/divider';
import { Panel } from 'primeng/panel';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { NavigationService } from '../../../shared/services/navigation.service';
import { Project } from '../../../shared/types/cv/cv-projects.types';

@Component({
  selector: 'app-projects-container',
  imports: [SectionLayoutComponent, Tag, Card, Button, Divider, Panel, AnimateOnScroll],
  templateUrl: './projects-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsContainerComponent {
  protected readonly CvProjects: Projects = Cv.projects;
  protected readonly NavigationItemType = NavigationItemType;
  private readonly navigationService = inject(NavigationService);

  protected onProjectLink(item: Project): void {
    if (!item.url) {
      return;
    }
    this.navigationService.navigateOutside(item.url);
  }
}
