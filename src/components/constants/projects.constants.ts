import { ProjectCardProps } from '@/components/ui/project-card/project-card.tsx';

export const ProjectCards: ProjectCardProps[] = [
    {
        id: 'ubb-citizen-science',
        title: 'UBB Citizen Science',
        date: '2023',
        hasIcon: true,
        iconUrl: 'https://citizenscience.openscience.ubbcluj.ro/',
        iconType: 'Website',
        projectType: 'Work',
        description: `An online platform that Babeș-Bolyai University aims to showcase its projects that involve citizens in a comprehensive and accessible manner. Citizens have the opportunity to select projects of interest and find simple and efficient tools to get involved, expressing long-term interest so they can be efficiently contacted whenever new relevant projects emerge.`,
        involvement: `I participated in this project for a set period to assist in advancing it to the production phase. My role involved full-stack development duties, with a focus on refining and improving challenging aspects of the application, including functionality, JPA query optimization, and enhancing overall code cleanliness and quality.`,
        tags: [
            'Spring',
            'Angular',
            'Java',
            'JavaScript',
            'TypeScript',
            'Storybook',
            'Docker',
            'Nx',
            'Azure'
        ]
    }
];
