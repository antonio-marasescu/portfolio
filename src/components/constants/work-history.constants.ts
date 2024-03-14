import { TimelineEventProps } from '@/components/ui/timeline.tsx';

export const WorkHistoryEvents: TimelineEventProps[] = [
    {
        id: 'work-history-00',
        title: 'MSG Systems Romania',
        subEvents: [
            {
                id: 'work-history-001',
                title: 'Senior Software Engineer',
                description: [
                    `At present, I am leading a team focused on the development and integration of Large Language Model (LLM) solutions into an Objective and Key Results (OKR) management application, leveraging a completely serverless architecture. I bear the primary responsibility for the architectural design and research on various subjects, as well as managing the AWS cloud infrastructure using the CDK.`,
                    `I am spearheading the creation of an internal component library for the company, designed to enhance brand consistency and facilitate reusability across its internal projects.`,
                    `Worked on developing a platform that Babeș-Bolyai University aims to showcase its projects that involve citizens in a comprehensive and accessible manner. My role involved full-stack development duties, with a focus on refining and improving challenging aspects of the application, including functionality, JPA query optimization, and enhancing overall code cleanliness and quality.`,
                    `Worked on a responsive processing application for leads in sales management which needed to handle large amount of external imported data through excel, being the main frontend developer and contributing to the AWS architecture.`
                ],
                period: 'Mar.2022 - Present'
            },
            {
                id: 'work-history-002',
                title: 'Software Engineer',
                description: [
                    `I was involved in the development of several applications which offered insurance companies an automation of the reinsurance workflow through a private permissioned blockchain called Corda. Contributed to structuring and orchestration the frontend side of the application, adding good practice patterns such as Redux and reusable component library using Storybook. Managed the orchestration and architecture of complex logic for a large number inter-fields calculations and validation.`,
                    `In addition to this, I contributed to a multi-party contract negotiation platform that featured fully segregated data multi-tenancy. My primary responsibilities included developing the frontend React application and contributing to the project's architecture.`,
                    `Furthermore, I assumed the role of Lead Coordinator within the company's internship programs, overseeing a team of mentors and spearheading the development of the training curriculum, thereby enhancing the professional growth and learning experience of the interns.`,
                    `Additionally, I created a roadmap creator and viewer for the company's training programs, enabling the display of graph-like roadmaps with links to markdown files hosted on Github.`
                ],
                period: 'Mar.2020 - Mar. 2022 2 yrs'
            },
            {
                id: 'work-history-003',
                title: 'Junior Software Engineer',
                description: [
                    `Worked on an application for ticketing and promotions offered by energy companies in Germany. Contributed to the development of a full-stack application, employing Node.js (Express.js), GraphQL, Angular, Postgres, Redis and AWS, implementing features across all facets of the application, including E2E testing using Cypress.`,
                    `Furthermore, I served as a mentor within the company's internship program, providing guidance and training to interns to enhance their professional development.`
                ],
                period: 'Sep.2019 - Mar. 2020 7 mos'
            },
            {
                id: 'work-history-004',
                title: 'Summer Intern',
                description: [
                    'Worked and developed a full-stack project alongside a small team of fellow interns using Angular, Spring and a SAP backend.'
                ],
                period: 'Jul.2019 - Sep. 2019 3 mos'
            }
        ]
    },
    {
        id: 'work-history-01',
        title: 'Yardi Romania',
        subEvents: [
            {
                id: 'work-history-011',
                title: 'Intern',
                description: [
                    'Worked on as a web developer intern in an Agile project focusing of US real estate market.'
                ],
                period: 'Oct. 2018 - Feb. 2019 5 mos'
            }
        ]
    }
];
