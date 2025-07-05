import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { SectionLayoutComponent } from '../../../shared/components/layout/section-layout.component';
import { Cv } from '../../../shared/config/constants/cv/cv.constants';
import { NavigationItemType } from '../../../shared/types/navigation/navbar.types';
import { Tag } from 'primeng/tag';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  AvailableSkillCategory,
  SkillCategory,
  SkillLevel
} from '../../../shared/types/cv/cv-skills.types';
import { SelectButton } from 'primeng/selectbutton';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { Card } from 'primeng/card';
import { Image } from 'primeng/image';
import { ThemeSeverity } from '../../../shared/types/theming/theming.types';
import { toSignal } from '@angular/core/rxjs-interop';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-skills-container',
  imports: [
    SectionLayoutComponent,
    Tag,
    ReactiveFormsModule,
    SelectButton,
    AnimateOnScroll,
    Card,
    Image
  ],
  templateUrl: './skills-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsContainerComponent {
  protected readonly NavigationItemType = NavigationItemType;
  protected readonly AllSkillCategory: SkillCategory = {
    id: AvailableSkillCategory.All,
    label: 'ALL',
    skills: []
  };
  protected readonly SkillLevelToSeverity: Record<SkillLevel, ThemeSeverity> = {
    Beginner: 'info',
    Intermediate: 'primary',
    Expert: 'success'
  };
  protected skillsFilterControl = new FormControl<AvailableSkillCategory>(
    AvailableSkillCategory.All,
    { validators: [Validators.required], nonNullable: true }
  );
  protected skillsFilterOptions = [this.AllSkillCategory].concat(Cv.skills.categories);
  protected selectedFilter = toSignal(
    this.skillsFilterControl.valueChanges.pipe(startWith(this.skillsFilterControl.value)),
    { initialValue: this.skillsFilterControl.value }
  );
  protected filteredCategories = computed(() => {
    const filter = this.selectedFilter();
    if (filter === AvailableSkillCategory.All) {
      return Cv.skills.categories;
    }
    return Cv.skills.categories.filter(category => category.id === filter);
  });
}
