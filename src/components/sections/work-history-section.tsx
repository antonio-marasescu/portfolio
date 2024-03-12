import { StandardSectionLayout } from '@/components/layouts/standard-section-layout.tsx';
import { Timeline } from '@/components/ui/timeline.tsx';
import { WorkHistoryEvents } from '@/components/constants/work-history.constants.ts';

export function WorkHistorySection() {
    return (
        <StandardSectionLayout sectionTitle="Work History">
            <div className="justify-center items-center">
                <Timeline events={WorkHistoryEvents} />
            </div>
        </StandardSectionLayout>
    );
}
