import { StandardSectionLayout } from '@/components/layouts/standard-section-layout.tsx';
import { Timeline, TimelineEventProps } from '@/components/ui/timeline.tsx';

export function WorkHistorySection() {
    const events: TimelineEventProps[] = [
        {
            id: '1',
            title: 'MSG Systems Romania',
            subEvents: [
                {
                    id: '3',
                    title: 'Senior Software Engineer',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis lacinia tincidunt. Sed ullamcorper, urna in convallis fringilla, orci nisl laoreet tellus, sed posuere nisl augue sed arcu. Vestibulum rutrum dignissim lectus, et finibus sapien lacinia ac. Maecenas bibendum risus commodo consequat lobortis. Nullam at velit mattis, tempor nunc finibus, congue neque. Etiam ac condimentum elit. Aliquam vel pharetra dolor. Etiam sit amet risus ornare, blandit sapien lacinia',
                    period: 'Mar.2022 - Present'
                },
                {
                    id: '2',
                    title: 'Software Engineer',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis lacinia tincidunt. Sed ullamcorper, urna in convallis fringilla, orci nisl laoreet tellus, sed posuere nisl augue sed arcu. Vestibulum rutrum dignissim lectus, et finibus sapien lacinia ac. Maecenas bibendum risus commodo consequat lobortis. Nullam at velit mattis, tempor nunc finibus, congue neque. Etiam ac condimentum elit. Aliquam vel pharetra dolor. Etiam sit amet risus ornare, blandit sapien lacinia, aliquet metus. Duis eu elit eget metus lacinia luctus. Duis laoreet, nulla dapibus dignissim blandit, quam lorem sollicitudin nunc, id dignissim mauris magna in leo. Morbi quam libero, imperdiet non nisl vel, rutrum dapibus mauris.',
                    period: 'Mar.2020 - Mar. 2022 2 yrs'
                },
                {
                    id: '1',
                    title: 'Junior Software Engineer',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis lacinia tincidunt. Sed ullamcorper, urna in convallis fringilla, orci nisl laoreet tellus, sed posuere nisl augue sed arcu. Vestibulum rutrum dignissim lectus, et finibus sapien lacinia ac. Maecenas bibendum risus commodo consequat lobortis. Nullam at velit mattis, tempor nunc finibus, congue neque. Etiam ac condimentum elit. Aliquam vel pharetra dolor. Etiam sit amet risus ornare, blandit sapien lacinia, aliquet metus. Duis eu elit eget metus lacinia luctus. Duis laoreet, nulla dapibus dignissim blandit, quam lorem sollicitudin nunc, id dignissim mauris magna in leo. Morbi quam libero, imperdiet non nisl vel, rutrum dapibus mauris.',
                    period: 'Sep.2019 - Mar. 2020 7 mos'
                },
                {
                    id: '0',
                    title: 'Summer Intern',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    period: 'Jul.2019 - Sep. 2019 3 mos'
                }
            ]
        },
        {
            id: '2',
            title: 'Yardi',
            subEvents: [
                {
                    id: '0',
                    title: 'Intern',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis lacinia tincidunt. ',
                    period: 'Oct. 2018 - Feb. 2019 5 mos'
                }
            ]
        }
    ];

    return (
        <StandardSectionLayout sectionTitle="Work History">
            <div className="justify-center items-center">
                <Timeline events={events} />
            </div>
        </StandardSectionLayout>
    );
}
