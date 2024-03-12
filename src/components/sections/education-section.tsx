import { StandardSectionLayout } from '@/components/layouts/standard-section-layout.tsx';
import { Timeline } from '@/components/ui/timeline.tsx';
import { EducationEvents } from '@/components/constants/education.constants.ts';

export function EducationSection() {
    return (
        <StandardSectionLayout sectionTitle="Education">
            <div className="justify-center items-center">
                <Timeline events={EducationEvents} />
            </div>
        </StandardSectionLayout>
    );
}
