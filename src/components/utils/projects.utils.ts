import { ProjectCardProps } from '@/components/ui/project-card/project-card.tsx';
import { cleanText } from '@/components/utils/text.utils.ts';

export function filterProjectCards(
    projects: ProjectCardProps[],
    searchText = ''
): ProjectCardProps[] {
    return projects.filter(
        project =>
            project.tags.filter(tag =>
                tag.length > 0
                    ? cleanText(tag) === cleanText(searchText)
                    : false
            ).length > 0
    );
}
