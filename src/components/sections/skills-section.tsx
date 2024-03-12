import { StandardSectionLayout } from '@/components/layouts/standard-section-layout.tsx';
import { SkillCard, SkillCardProps } from '@/components/ui/skill-card.tsx';
import { ChangeEvent, useState } from 'react';
import { SkillCards } from '@/components/constants/skills.constants.ts';
import { Input } from '@/components/ui/input.tsx';
import { enhanceSkillCards } from '@/components/utils/skills.utils.ts';
import { Label } from '@/components/ui/label.tsx';

export function SkillsSection() {
    const [filteredSkillCards, setFilterSkillCards] = useState<
        SkillCardProps[]
    >([...SkillCards]);
    const [searchText, setSearchText] = useState<string>('');

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
        setFilterSkillCards(
            enhanceSkillCards(filteredSkillCards, event.target.value)
        );
    };

    return (
        <StandardSectionLayout sectionTitle="Skills">
            <div className="mb-6">
                <Label htmlFor="skillSearch">Skill Search</Label>
                <Input
                    className="mt-1"
                    placeholder="Search for a skill, e.g. React"
                    id="skillSearch"
                    onChange={onInputChange}
                    value={searchText}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 justify-center items-center gap-4">
                <div className="col-span-3 h-full w-full">
                    <SkillCard
                        {...filteredSkillCards[1]}
                        key={filteredSkillCards[1].title}
                    />
                </div>
                <div className="col-span-3 h-full w-full">
                    <SkillCard
                        {...filteredSkillCards[2]}
                        key={filteredSkillCards[2].title}
                    />
                </div>
                <div className="col-span-2 h-full w-full">
                    <SkillCard
                        {...filteredSkillCards[3]}
                        key={filteredSkillCards[3].title}
                    />
                </div>
                <div className="col-span-2 h-full w-full">
                    <SkillCard
                        {...filteredSkillCards[0]}
                        key={filteredSkillCards[0].title}
                    />
                </div>
                <div className="col-span-2 h-full w-full">
                    <SkillCard
                        {...filteredSkillCards[4]}
                        key={filteredSkillCards[4].title}
                    />
                </div>
                <div className="col-span-3 h-full w-full">
                    <SkillCard
                        {...filteredSkillCards[5]}
                        key={filteredSkillCards[5].title}
                    />
                </div>
            </div>
        </StandardSectionLayout>
    );
}
