import { StandardSectionLayout } from '@/components/layouts/standard-section-layout.tsx';
import { SkillCard, SkillCardProps } from '@/components/ui/skill-card.tsx';
import { useState } from 'react';
import { SkillCards, Skills } from '@/components/constants/skills.constants.ts';
import { enhanceSkillCards } from '@/components/utils/skills.utils.ts';
import { Label } from '@/components/ui/label.tsx';
import { ComboBox, ComboBoxOption } from '@/components/ui/combobox.tsx';
import { NavigationSections } from '@/components/constants/navigation.constants.ts';

export function SkillsSection() {
    const [filteredSkillCards, setFilterSkillCards] = useState<
        SkillCardProps[]
    >([...SkillCards]);
    const skillOptions = Object.keys(Skills).map(
        skillKey =>
            ({
                value: Skills[skillKey].name,
                label: Skills[skillKey].name
            }) as ComboBoxOption
    );

    const onInputChange = (currentValue: string) => {
        setFilterSkillCards(
            enhanceSkillCards(filteredSkillCards, currentValue)
        );
    };

    return (
        <StandardSectionLayout
            id={NavigationSections.Skills.id}
            sectionTitle={NavigationSections.Skills.label}
        >
            <div className="mb-6">
                <Label htmlFor="skillSearch">Keyword Search</Label>
                <div className="mt-1"></div>
                <ComboBox
                    placeholder="Search..."
                    searchPlaceholder="Search by keyword"
                    onSelect={onInputChange}
                    options={skillOptions}
                    id="skillsSearch"
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
