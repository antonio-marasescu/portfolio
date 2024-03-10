import { SkillCardProps } from '@/components/ui/skill-card.tsx';

function cleanText(text: string): string {
    return text.toLowerCase().replace(' ', '');
}

export function enhanceSkillCards(
    skillCards: SkillCardProps[],
    searchText = ''
): SkillCardProps[] {
    return skillCards.map(skillCard => ({
        ...skillCard,
        skills: skillCard.skills.map(skill => ({
            ...skill,
            flagged:
                searchText.length > 0
                    ? cleanText(skill.name).includes(cleanText(searchText))
                    : false
        }))
    }));
}
