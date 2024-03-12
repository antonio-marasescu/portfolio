import { StandardSectionLayout } from '@/components/layouts/standard-section-layout.tsx';
import { Timeline } from '@/components/ui/timeline.tsx';
import { WorkHistoryEvents } from '@/components/constants/work-history.constants.ts';
import { NavigationSections } from '@/components/constants/navigation.constants.ts';

export function WorkHistorySection() {
    return (
        <StandardSectionLayout
            id={NavigationSections.WorkHistory.id}
            sectionTitle={NavigationSections.WorkHistory.label}
        >
            <div className="justify-center items-center">
                <Timeline events={WorkHistoryEvents} />
            </div>
        </StandardSectionLayout>
    );
}
