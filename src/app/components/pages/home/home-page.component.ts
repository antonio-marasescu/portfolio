import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StandardLayoutComponent } from '../../../shared/components/layout/standard-layout.component';
import { NavbarComponent } from '../../../shared/components/navigation/navbar.component';
import { IntroContainerComponent } from '../../containers/intro/intro-container.component';
import { AboutContainerComponent } from '../../containers/about/about-container.component';
import { SkillsContainerComponent } from '../../containers/skills/skills-container.component';
import { WorkContainerComponent } from '../../containers/work/work-container.component';
import { EducationContainerComponent } from '../../containers/education/education-container.component';
import { ProjectsContainerComponent } from '../../containers/projects/projects-container.component';
import { CertificationsContainerComponent } from '../../containers/certifications/certifications-container.component';

@Component({
  selector: 'app-home-page',
  imports: [
    StandardLayoutComponent,
    NavbarComponent,
    IntroContainerComponent,
    AboutContainerComponent,
    SkillsContainerComponent,
    WorkContainerComponent,
    EducationContainerComponent,
    ProjectsContainerComponent,
    CertificationsContainerComponent
  ],
  templateUrl: 'home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {}
