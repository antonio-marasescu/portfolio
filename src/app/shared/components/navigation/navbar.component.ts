import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationItems } from '../../config/constants/navigation/navigation.constants';
import { ThemeSelectorComponent } from '../theming/theme-selector.component';
import { Menubar } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';
import { NavigationService } from '../../services/navigation.service';
import {
  NavbarItem,
  NavigationItemType,
} from '../../types/navigation/navbar.types';
import { SplitButton } from 'primeng/splitbutton';
import { CvPromptService } from '../../services/cv-prompt.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-navbar',
  imports: [ThemeSelectorComponent, Menubar, Ripple, SplitButton],
  template: `
    <div class="w-screen min-h-20 flex flex-row justify-center">
      <p-menubar [model]="NavigationItems" class="rounded-full  min-w-62 m-2">
        <ng-template #item let-item let-root="root" class="rounded-full">
          <a
            tabindex="0"
            pRipple
            class="flex items-center p-menubar-item-link text-base bg-opacity-10"
            (click)="navigateToSection(item)"
            (keydown.enter)="navigateToSection(item)"
            (keydown.space)="navigateToSection(item)"
          >
            @if (item.icon) {
              <span class="material-icons-outlined">{{ item.icon }}</span>
            }
            <span>{{ item.label }}</span>
            @if (item.items) {
              <span class="material-icons-outlined ml-auto">{{
                root ? 'expand_more' : 'chevron_right'
              }}</span>
            }
          </a>
        </ng-template>
        <ng-template #end>
          <div class="flex items-center pl-12">
            <p-splitbutton
              pRipple
              label="Prompt"
              text
              size="small"
              severity="secondary"
              [model]="promptItems"
            >
              <ng-template #content>
                <div
                  class="flex flex-row items-center justify-center justify-items-center"
                >
                  <span class="material-icons-outlined mr-2">smart_toy</span>
                  <span class="text-sm lg:text-base">Prompt</span>
                </div>
              </ng-template>
            </p-splitbutton>
            <app-theme-selector />
          </div>
        </ng-template>
      </p-menubar>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly NavigationItems = NavigationItems;
  private readonly navigationService = inject(NavigationService);
  private readonly cvPromptService = inject(CvPromptService);
  private readonly utilsService = inject(UtilsService);

  protected readonly promptItems = [
    {
      label: 'Prompt Version (TXT)',
      command: () => this.copyPromptVersionText(),
    },
    {
      label: 'Prompt Version (XML)',
      command: () => this.copyPromptVersionXml(),
    },
    {
      label: 'Review Prompt',
      command: () => this.copyReviewPrompt(),
    },
    {
      label: 'Summary Prompt',
      command: () => this.copySummaryPrompt(),
    },
  ];

  protected navigateToSection(item: NavbarItem): void {
    if (item.id === NavigationItemType.Experience) {
      return;
    }

    const navId = 'section-' + item.id;
    this.navigationService.scrollToSection(navId);
  }

  protected copyPromptVersionText(): void {
    const cleanCv = this.cvPromptService.retrieveCleanCv('text');
    this.utilsService.copyToClipboard(
      cleanCv,
      'The TXT prompt has been copied to your clipboard',
    );
  }

  protected copyPromptVersionXml(): void {
    const cleanCv = this.cvPromptService.retrieveCleanCv('xml');
    this.utilsService.copyToClipboard(
      cleanCv,
      'The XML prompt has been copied to your clipboard',
    );
  }

  protected copyReviewPrompt(): void {
    const cleanCv = this.cvPromptService.retrieveReviewPrompt('xml');
    this.utilsService.copyToClipboard(
      cleanCv,
      'The review prompt has been copied to your clipboard',
    );
  }

  protected copySummaryPrompt(): void {
    const cleanCv = this.cvPromptService.retrieveSummaryPrompt('xml');
    this.utilsService.copyToClipboard(
      cleanCv,
      'The summary prompt has been copied to your clipboard',
    );
  }
}
