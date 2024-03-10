import { StandardSectionLayout } from '@/components/layouts/standard-section-layout.tsx';
import { SkillCard, SkillCardProps } from '@/components/ui/skill-card.tsx';

export function SkillsSection() {
    const skillCards: SkillCardProps[] = [
        {
            title: 'Languages',
            skills: [
                {
                    name: 'TypeScript',
                    url: 'technologies/languages/typescript.png'
                },
                {
                    name: 'JavaScript',
                    url: 'technologies/languages/javascript.png'
                },
                { name: 'Java', url: 'technologies/languages/java.png' },
                { name: 'Solidity', url: 'technologies/languages/solidity.png' }
            ]
        },
        {
            title: 'Frontend',
            skills: [
                {
                    name: 'Angular',
                    url: 'technologies/frontend/angular.png'
                },
                {
                    name: 'React',
                    url: 'technologies/frontend/react.png'
                },
                { name: 'CSS', url: 'technologies/frontend/css.png' },
                { name: 'HTML', url: 'technologies/frontend/html.png' },
                { name: 'SASS', url: 'technologies/frontend/sass.png' },
                { name: 'Tailwind', url: 'technologies/frontend/tailwind.png' },
                { name: 'NGRX', url: 'technologies/frontend/ngrx.svg' },
                { name: 'Redux', url: 'technologies/frontend/redux.png' },
                {
                    name: 'Material Design',
                    url: 'technologies/frontend/material-design.png'
                },
                {
                    name: 'Storybook',
                    url: 'technologies/frontend/storybook.png'
                }
            ]
        },
        {
            title: 'Backend',
            skills: [
                {
                    name: 'NodeJS',
                    url: 'technologies/backend/nodejs.png'
                },
                {
                    name: 'Spring Boot',
                    url: 'technologies/backend/spring-boot.png'
                },
                {
                    name: 'AWS Lambda',
                    url: 'technologies/backend/aws-lambda.png'
                },
                {
                    name: 'ExpressJs',
                    url: 'technologies/backend/express.png'
                },
                {
                    name: 'NestJs',
                    url: 'technologies/backend/nestjs.svg'
                },
                {
                    name: 'GraphQL',
                    url: 'technologies/backend/graphql.png'
                },
                {
                    name: 'PostgreSQL',
                    url: 'technologies/backend/postgresql.png'
                },
                {
                    name: 'SQL',
                    url: 'technologies/backend/sql.png'
                },
                {
                    name: 'Dynamodb',
                    url: 'technologies/backend/dynamodb.png'
                }
            ]
        },
        {
            title: 'DevOps',
            skills: [
                { name: 'Terraform', url: 'technologies/devops/terraform.png' },
                { name: 'AWS CDK', url: 'technologies/devops/aws-cdk.png' },
                { name: 'AWS Services', url: 'technologies/devops/aws.png' },
                { name: 'Docker', url: 'technologies/devops/docker.png' },
                {
                    name: 'Github Actions',
                    url: 'technologies/devops/github-actions.svg'
                }
            ]
        },
        {
            title: 'Testing',
            skills: [
                { name: 'Jest', url: 'technologies/testing/jest.svg' },
                { name: 'Cypress', url: 'technologies/testing/cypress.png' }
            ]
        },
        {
            title: 'Miscellaneous',
            skills: [
                { name: 'Git', url: 'technologies/miscellaneous/git.png' },
                { name: 'Nx', url: 'technologies/miscellaneous/nx.jpg' },
                {
                    name: 'Esbuild',
                    url: 'technologies/miscellaneous/esbuild.png'
                },
                {
                    name: 'Ethereum',
                    url: 'technologies/miscellaneous/ethereum.png'
                }
            ]
        }
    ];

    return (
        <StandardSectionLayout sectionTitle="Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 justify-center items-center gap-4">
                <div className="col-span-3 h-full w-full">
                    <SkillCard {...skillCards[1]} key={skillCards[1].title} />
                </div>
                <div className="col-span-3 h-full w-full">
                    <SkillCard {...skillCards[2]} key={skillCards[2].title} />
                </div>
                <div className="col-span-2 h-full w-full">
                    <SkillCard {...skillCards[3]} key={skillCards[3].title} />
                </div>
                <div className="col-span-2 h-full w-full">
                    <SkillCard {...skillCards[0]} key={skillCards[0].title} />
                </div>
                <div className="col-span-2 h-full w-full">
                    <SkillCard {...skillCards[4]} key={skillCards[4].title} />
                </div>
                <div className="col-span-3 h-full w-full">
                    <SkillCard {...skillCards[5]} key={skillCards[5].title} />
                </div>
            </div>
        </StandardSectionLayout>
    );
}
