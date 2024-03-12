import { StandardSectionLayout } from '@/components/layouts/standard-section-layout.tsx';
import { ProjectCard } from '@/components/ui/project-card/project-card.tsx';
import { ProjectCards } from '@/components/constants/projects.constants.ts';

export function ProjectsSection() {
    return (
        <StandardSectionLayout sectionTitle="Projects">
            <div className="justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ProjectCards.map(projectCard => (
                    <ProjectCard {...projectCard} key={projectCard.id} />
                ))}
            </div>
        </StandardSectionLayout>
    );
}
