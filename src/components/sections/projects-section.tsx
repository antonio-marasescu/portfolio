import { StandardSectionLayout } from '@/components/layouts/standard-section-layout.tsx';
import {
    ProjectCard,
    ProjectCardProps
} from '@/components/ui/project-card/project-card.tsx';
import { ProjectCards } from '@/components/constants/projects.constants.ts';
import { useState } from 'react';
import { Skills } from '@/components/constants/skills.constants.ts';
import { ComboBox, ComboBoxOption } from '@/components/ui/combobox.tsx';
import { filterProjectCards } from '@/components/utils/projects.utils.ts';
import { Label } from '@/components/ui/label.tsx';

export function ProjectsSection() {
    const [projectCards, setProjectCards] = useState<ProjectCardProps[]>([
        ...ProjectCards
    ]);
    const skillOptions = Object.keys(Skills).map(
        skillKey =>
            ({
                value: Skills[skillKey].name,
                label: Skills[skillKey].name
            }) as ComboBoxOption
    );

    const onInputChange = (currentValue: string) => {
        setProjectCards(filterProjectCards(ProjectCards, currentValue));
    };

    return (
        <StandardSectionLayout sectionTitle="Projects">
            <div className="mb-6">
                <Label htmlFor="projectsSearch">Keyword Search</Label>
                <div className="mt-1"></div>
                <ComboBox
                    placeholder="Search..."
                    searchPlaceholder="Search by keyword"
                    onSelect={onInputChange}
                    options={skillOptions}
                    id="projectsSearch"
                />
            </div>
            <div className="justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
                {projectCards.map(projectCard => (
                    <ProjectCard {...projectCard} key={projectCard.id} />
                ))}
            </div>
        </StandardSectionLayout>
    );
}
