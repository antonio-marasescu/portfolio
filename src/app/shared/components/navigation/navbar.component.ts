import { ChangeDetectionStrategy, Component, inject, viewChild } from '@angular/core';
import {
  CodexAppRoute,
  NavigationItems
} from '../../config/constants/navigation/navigation.constants';
import { ThemeSelectorComponent } from '../theming/theme-selector.component';
import { Menubar } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';
import { NavigationService } from '../../services/navigation.service';
import { NavbarItem, NavigationItemType, PopoverItem } from '../../types/navigation/navbar.types';
import { CvPromptService } from '../../services/cv-prompt.service';
import { UtilsService } from '../../services/utils.service';
import { Button } from 'primeng/button';
import { Popover } from 'primeng/popover';

@Component({
  selector: 'app-navbar',
  imports: [ThemeSelectorComponent, Menubar, Ripple, Button, Popover],
  template: `
    <nav class="w-screen min-h-20 flex flex-row justify-center">
      <p-menubar [model]="NavigationItems" class="rounded-full min-w-62 w-264 m-2">
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
          <div class="flex items-center gap-2">
            <p-button size="small" outlined="true" severity="help" (onClick)="onCodexApp()">
              <span class="material-icons-outlined">auto_stories</span>
              <span class="text-sm lg:text-base">Codex</span>
            </p-button>
            <p-button
              size="small"
              outlined="true"
              severity="info"
              (onClick)="onPromptPopoverToggle($event)"
            >
              <span class="material-icons-outlined">smart_toy</span>
              <span class="text-sm lg:text-base">Prompt</span>
            </p-button>
            <p-popover #promptPopover>
              <div class="flex flex-col gap-2">
                @for (item of promptItems; track item.id) {
                  <p-button
                    [label]="item.label"
                    text="true"
                    severity="secondary"
                    size="small"
                    (onClick)="onPromptPopoverItemClick(item, $event)"
                  />
                }
              </div>
            </p-popover>
            <app-theme-selector />
          </div>
        </ng-template>
      </p-menubar>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  private readonly navigationService = inject(NavigationService);
  private readonly cvPromptService = inject(CvPromptService);
  private readonly utilsService = inject(UtilsService);
  private readonly promptPopover = viewChild<Popover>('promptPopover');
  protected readonly NavigationItems = NavigationItems;

  protected readonly promptItems: PopoverItem[] = [
    {
      id: 'prompt-txt-version',
      label: 'Prompt Version (TXT)',
      command: () => this.copyPromptVersionText()
    },
    {
      id: 'prompt-xml-version',
      label: 'Prompt Version (XML)',
      command: () => this.copyPromptVersionXml()
    },
    {
      id: 'prompt-review-version',
      label: 'Review Prompt',
      command: () => this.copyReviewPrompt()
    },
    {
      id: 'prompt-summary-version',
      label: 'Summary Prompt',
      command: () => this.copySummaryPrompt()
    }
  ];

  protected async onCodexApp(): Promise<void> {
    this.navigationService.navigateOutside(CodexAppRoute);
  }

  protected onPromptPopoverToggle(event: MouseEvent): void {
    const popover = this.promptPopover();
    if (!popover) {
      return;
    }
    popover.toggle(event);
  }

  protected onPromptPopoverItemClick(item: PopoverItem, event: MouseEvent): void {
    if (!item) {
      return;
    }
    item.command();
    this.onPromptPopoverToggle(event);
  }

  protected navigateToSection(item: NavbarItem): void {
    if (item.id === NavigationItemType.Experience) {
      return;
    }

    const navId = 'section-' + item.id;
    this.navigationService.scrollToSection(navId);
  }

  protected copyPromptVersionText(): void {
    const cleanCv = this.cvPromptService.retrieveCleanCv('text');
    this.utilsService.copyToClipboard(cleanCv, 'The TXT prompt has been copied to your clipboard');
  }

  protected copyPromptVersionXml(): void {
    const cleanCv = this.cvPromptService.retrieveCleanCv('xml');
    this.utilsService.copyToClipboard(cleanCv, 'The XML prompt has been copied to your clipboard');
  }

  protected copyReviewPrompt(): void {
    const cleanCv = this.cvPromptService.retrieveReviewPrompt('xml');
    this.utilsService.copyToClipboard(
      cleanCv,
      'The review prompt has been copied to your clipboard'
    );
  }

  protected copySummaryPrompt(): void {
    const cleanCv = this.cvPromptService.retrieveSummaryPrompt('xml');
    this.utilsService.copyToClipboard(
      cleanCv,
      'The summary prompt has been copied to your clipboard'
    );
  }
}
