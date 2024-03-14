import { SkillCardProps } from '@/components/ui/skill-card.tsx';

export const Skills: Record<string, { name: string; url: string }> = {
    TypeScript: {
        name: 'TypeScript',
        url: 'technologies/languages/typescript.png'
    },
    JavaScript: {
        name: 'JavaScript',
        url: 'technologies/languages/javascript.png'
    },
    Java: {
        name: 'Java',
        url: 'technologies/languages/java.png'
    },
    Solidity: {
        name: 'Solidity',
        url: 'technologies/languages/solidity.png'
    },
    Angular: {
        name: 'Angular',
        url: 'technologies/frontend/angular.png'
    },
    React: {
        name: 'React',
        url: 'technologies/frontend/react.png'
    },
    CSS: {
        name: 'CSS',
        url: 'technologies/frontend/css.png'
    },
    HTML: {
        name: 'HTML',
        url: 'technologies/frontend/html.png'
    },
    SASS: {
        name: 'SASS',
        url: 'technologies/frontend/sass.png'
    },
    Tailwind: {
        name: 'Tailwind',
        url: 'technologies/frontend/tailwind.png'
    },
    Ngrx: {
        name: 'NGRX',
        url: 'technologies/frontend/ngrx.svg'
    },
    Redux: {
        name: 'Redux',
        url: 'technologies/frontend/redux.png'
    },
    MaterialDesign: {
        name: 'Material Design',
        url: 'technologies/frontend/material-design.png'
    },
    Storybook: {
        name: 'Storybook',
        url: 'technologies/frontend/storybook.png'
    },
    NodeJS: {
        name: 'NodeJs',
        url: 'technologies/backend/nodejs.png'
    },
    SpringBoot: {
        name: 'Spring Boot',
        url: 'technologies/backend/spring-boot.png'
    },
    AwsLambda: {
        name: 'AWS Lambda',
        url: 'technologies/backend/aws-lambda.png'
    },
    ExpressJs: {
        name: 'ExpressJs',
        url: 'technologies/backend/express.png'
    },
    NestJs: {
        name: 'NestJs',
        url: 'technologies/backend/nestjs.svg'
    },
    GraphQl: {
        name: 'GraphQL',
        url: 'technologies/backend/graphql.png'
    },
    PostgreSQL: {
        name: 'PostgreSQL',
        url: 'technologies/backend/postgresql.png'
    },
    Sql: {
        name: 'SQL',
        url: 'technologies/backend/sql.png'
    },
    Dynamodb: {
        name: 'Dynamodb',
        url: 'technologies/backend/dynamodb.png'
    },
    Jpa: {
        name: 'JPA',
        url: 'technologies/backend/jpa.png'
    },
    TypeORM: {
        name: 'TypeORM',
        url: 'technologies/backend/typeorm.png'
    },
    Terraform: {
        name: 'Terraform',
        url: 'technologies/devops/terraform.png'
    },
    AwsCdk: {
        name: 'AWS CDK',
        url: 'technologies/devops/aws-cdk.png'
    },
    AwsServices: {
        name: 'AWS Services',
        url: 'technologies/devops/aws.png'
    },
    Docker: {
        name: 'Docker',
        url: 'technologies/devops/docker.png'
    },
    GithubActions: {
        name: 'Github Actions',
        url: 'technologies/devops/github-actions.svg'
    },
    Jest: {
        name: 'Jest',
        url: 'technologies/testing/jest.svg'
    },
    Cypress: {
        name: 'Cypress',
        url: 'technologies/testing/cypress.png'
    },
    Git: {
        name: 'Git',
        url: 'technologies/miscellaneous/git.png'
    },
    Nx: {
        name: 'Nx',
        url: 'technologies/miscellaneous/nx.jpg'
    },
    Esbuild: {
        name: 'ESBuild',
        url: 'technologies/miscellaneous/esbuild.png'
    },
    Ethereum: {
        name: 'Ethereum',
        url: 'technologies/miscellaneous/ethereum.png'
    },
    Corda: {
        name: 'Corda',
        url: ''
    },
    LLM: {
        name: 'LLM',
        url: ''
    },
    OpenAI: {
        name: 'OpenAI',
        url: ''
    },
    LangChain: {
        name: 'LangChain',
        url: ''
    }
};

export const SkillCards: SkillCardProps[] = [
    {
        title: 'Languages',
        skills: [
            { ...Skills.TypeScript, flagged: false },
            {
                ...Skills.JavaScript,
                flagged: false
            },
            {
                ...Skills.Java,
                flagged: false
            },
            {
                ...Skills.Solidity,
                flagged: false
            }
        ]
    },
    {
        title: 'Frontend',
        skills: [
            {
                ...Skills.Angular,
                flagged: false
            },
            {
                ...Skills.React,
                flagged: false
            },
            {
                ...Skills.CSS,
                flagged: false
            },
            {
                ...Skills.HTML,
                flagged: false
            },
            {
                ...Skills.SASS,
                flagged: false
            },
            {
                ...Skills.Tailwind,
                flagged: false
            },
            {
                ...Skills.Ngrx,
                flagged: false
            },
            {
                ...Skills.Redux,
                flagged: false
            },
            {
                ...Skills.MaterialDesign,
                flagged: false
            },
            {
                ...Skills.Storybook,
                flagged: false
            }
        ]
    },
    {
        title: 'Backend',
        skills: [
            {
                ...Skills.NodeJS,
                flagged: false
            },
            {
                ...Skills.SpringBoot,
                flagged: false
            },
            {
                ...Skills.AwsLambda,
                flagged: false
            },
            {
                ...Skills.ExpressJs,
                flagged: false
            },
            {
                ...Skills.NestJs,
                flagged: false
            },
            {
                ...Skills.GraphQl,
                flagged: false
            },
            {
                ...Skills.PostgreSQL,
                flagged: false
            },
            {
                ...Skills.Sql,
                flagged: false
            },
            {
                ...Skills.Dynamodb,
                flagged: false
            },
            {
                ...Skills.Jpa,
                flagged: false
            },
            {
                ...Skills.TypeORM,
                flagged: false
            }
        ]
    },
    {
        title: 'DevOps',
        skills: [
            {
                ...Skills.Terraform,
                flagged: false
            },
            {
                ...Skills.AwsCdk,
                flagged: false
            },
            {
                ...Skills.AwsServices,
                flagged: false
            },
            {
                ...Skills.Docker,
                flagged: false
            },
            {
                ...Skills.GithubActions,
                flagged: false
            }
        ]
    },
    {
        title: 'Testing',
        skills: [
            {
                ...Skills.Jest,
                flagged: false
            },
            {
                ...Skills.Cypress,
                flagged: false
            }
        ]
    },
    {
        title: 'Miscellaneous',
        skills: [
            {
                ...Skills.Git,
                flagged: false
            },
            {
                ...Skills.Nx,
                flagged: false
            },
            {
                ...Skills.Esbuild,
                flagged: false
            },
            {
                ...Skills.Ethereum,
                flagged: false
            }
        ]
    }
];
