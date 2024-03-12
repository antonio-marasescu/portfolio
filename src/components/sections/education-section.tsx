import { StandardSectionLayout } from '@/components/layouts/standard-section-layout.tsx';
import { Timeline } from '@/components/ui/timeline.tsx';
import { EducationEvents } from '@/components/constants/education.constants.ts';
import { NavigationSections } from '@/components/constants/navigation.constants.ts';

export function EducationSection() {
    return (
        <StandardSectionLayout
            id={NavigationSections.Education.id}
            sectionTitle={NavigationSections.Education.label}
        >
            <div className="justify-center items-center">
                <Timeline events={EducationEvents} />
            </div>
        </StandardSectionLayout>
    );
}
