import { StandardSectionLayout } from '@/components/layouts/standard-section-layout.tsx';
import { Timeline, TimelineEventProps } from '@/components/ui/timeline.tsx';

export function EducationSection() {
    const events: TimelineEventProps[] = [
        {
            id: 'education-history-00',
            title: '',
            subEvents: [
                {
                    id: 'education-history-001',
                    title: 'Technical University of Cluj-Napoca',
                    description:
                        "Master's degree Information Technology in Economy",
                    period: 'Jan 2020 - Jul 2023'
                },
                {
                    id: 'education-history-002',
                    title: 'Technical University of Cluj-Napoca',
                    description: "Bachelor's degree, Computer Science",
                    period: '2016 - 2020'
                },
                {
                    id: 'education-history-003',
                    title: 'Ion Bratianu National College, Pitesti',
                    description:
                        'Baccalaureate, Intensive Mathematics-Informatics',
                    period: '2012 - 2016'
                }
            ]
        }
    ];
    return (
        <StandardSectionLayout sectionTitle="Education">
            <div className="justify-center items-center">
                <Timeline events={events} />
            </div>
        </StandardSectionLayout>
    );
}
