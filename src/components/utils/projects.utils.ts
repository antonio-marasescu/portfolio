import { ProjectCardProps } from '@/components/ui/project-card/project-card.tsx';
import { cleanText } from '@/components/utils/text.utils.ts';

export function filterProjectCards(
    projects: ProjectCardProps[],
    searchText = ''
): ProjectCardProps[] {
    return projects.filter(
        project =>
            project.tags.filter(tag =>
                cleanText(tag).includes(cleanText(searchText))
            ).length > 0
    );
}
