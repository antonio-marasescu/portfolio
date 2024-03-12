import { SkillCardProps } from '@/components/ui/skill-card.tsx';
import { cleanText } from '@/components/utils/text.utils.ts';

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
