import { AvailableSkill, Skill } from '../../../types/cv/cv-skills.types';

export const CvAvailableSkills: Record<AvailableSkill, Skill> = {
  [AvailableSkill.TypeScript]: {
    id: AvailableSkill.TypeScript,
    label: 'TypeScript',
    imageUrl: 'technologies/languages/typescript.png',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.JavaScript]: {
    id: AvailableSkill.JavaScript,
    label: 'JavaScript',
    imageUrl: 'technologies/languages/javascript.png',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.Java]: {
    id: AvailableSkill.Java,
    label: 'Java',
    imageUrl: 'technologies/languages/java.png',
    level: 'Intermediate',
    experience: 5
  },
  [AvailableSkill.Solidity]: {
    id: AvailableSkill.Solidity,
    label: 'Solidity',
    imageUrl: 'technologies/languages/solidity.png',
    level: 'Beginner',
    experience: 1
  },
  [AvailableSkill.Angular]: {
    id: AvailableSkill.Angular,
    label: 'Angular',
    imageUrl: 'technologies/frontend/angular.png',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.React]: {
    id: AvailableSkill.React,
    label: 'React',
    imageUrl: 'technologies/frontend/react.png',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.CSS]: {
    id: AvailableSkill.CSS,
    label: 'CSS',
    imageUrl: 'technologies/frontend/css.png',
    level: 'Intermediate',
    experience: 4
  },
  [AvailableSkill.HTML]: {
    id: AvailableSkill.HTML,
    label: 'HTML',
    imageUrl: 'technologies/frontend/html.png',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.SASS]: {
    id: AvailableSkill.SASS,
    label: 'SASS',
    imageUrl: 'technologies/frontend/sass.png',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.Tailwind]: {
    id: AvailableSkill.Tailwind,
    label: 'Tailwind',
    imageUrl: 'technologies/frontend/tailwind.png',
    level: 'Expert',
    experience: 3
  },
  [AvailableSkill.Ngrx]: {
    id: AvailableSkill.Ngrx,
    label: 'NGRX',
    imageUrl: 'technologies/frontend/ngrx.svg',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.Redux]: {
    id: AvailableSkill.Redux,
    label: 'Redux',
    imageUrl: 'technologies/frontend/redux.png',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.MaterialDesign]: {
    id: AvailableSkill.MaterialDesign,
    label: 'Material Design',
    imageUrl: 'technologies/frontend/material-design.png',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.Storybook]: {
    id: AvailableSkill.Storybook,
    label: 'Storybook',
    imageUrl: 'technologies/frontend/storybook.png',
    level: 'Expert',
    experience: 3
  },
  [AvailableSkill.NodeJS]: {
    id: AvailableSkill.NodeJS,
    label: 'NodeJs',
    imageUrl: 'technologies/backend/nodejs.png',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.SpringBoot]: {
    id: AvailableSkill.SpringBoot,
    label: 'Spring Boot',
    imageUrl: 'technologies/backend/spring-boot.png',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.AwsLambda]: {
    id: AvailableSkill.AwsLambda,
    label: 'AWS Lambda',
    imageUrl: 'technologies/backend/aws-lambda.png',
    level: 'Expert',
    experience: 3
  },
  [AvailableSkill.ExpressJs]: {
    id: AvailableSkill.ExpressJs,
    label: 'ExpressJs',
    imageUrl: 'technologies/backend/express.png',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.NestJs]: {
    id: AvailableSkill.NestJs,
    label: 'NestJs',
    imageUrl: 'technologies/backend/nestjs.svg',
    level: 'Expert',
    experience: 4
  },
  [AvailableSkill.GraphQl]: {
    id: AvailableSkill.GraphQl,
    label: 'GraphQL',
    imageUrl: 'technologies/backend/graphql.png',
    level: 'Intermediate',
    experience: 2
  },
  [AvailableSkill.PostgreSQL]: {
    id: AvailableSkill.PostgreSQL,
    label: 'PostgreSQL',
    imageUrl: 'technologies/backend/postgresql.png',
    level: 'Intermediate',
    experience: 4
  },
  [AvailableSkill.Sql]: {
    id: AvailableSkill.Sql,
    label: 'SQL',
    imageUrl: 'technologies/backend/sql.png',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.Dynamodb]: {
    id: AvailableSkill.Dynamodb,
    label: 'Dynamodb',
    imageUrl: 'technologies/backend/dynamodb.png',
    level: 'Intermediate',
    experience: 2
  },
  [AvailableSkill.Jpa]: {
    id: AvailableSkill.Jpa,
    label: 'JPA',
    imageUrl: 'technologies/backend/jpa.png',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.TypeORM]: {
    id: AvailableSkill.TypeORM,
    label: 'TypeORM',
    imageUrl: 'technologies/backend/typeorm.png',
    level: 'Expert',
    experience: 3
  },
  [AvailableSkill.Terraform]: {
    id: AvailableSkill.Terraform,
    label: 'Terraform',
    imageUrl: 'technologies/devops/terraform.png',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.AwsCdk]: {
    id: AvailableSkill.AwsCdk,
    label: 'AWS CDK',
    imageUrl: 'technologies/devops/aws-cdk.png',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.AwsServices]: {
    id: AvailableSkill.AwsServices,
    label: 'AWS Services',
    imageUrl: 'technologies/devops/aws.png',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.Docker]: {
    id: AvailableSkill.Docker,
    label: 'Docker',
    imageUrl: 'technologies/devops/docker.png',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.GithubActions]: {
    id: AvailableSkill.GithubActions,
    label: 'Github Actions',
    imageUrl: 'technologies/devops/github-actions.svg',
    level: 'Expert',
    experience: 3
  },
  [AvailableSkill.Jest]: {
    id: AvailableSkill.Jest,
    label: 'Jest',
    imageUrl: 'technologies/testing/jest.svg',
    level: 'Expert',
    experience: 3
  },
  [AvailableSkill.Cypress]: {
    id: AvailableSkill.Cypress,
    label: 'Cypress',
    imageUrl: 'technologies/testing/cypress.png',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.Git]: {
    id: AvailableSkill.Git,
    label: 'Git',
    imageUrl: 'technologies/miscellaneous/git.png',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.Nx]: {
    id: AvailableSkill.Nx,
    label: 'Nx',
    imageUrl: 'technologies/miscellaneous/nx.jpg',
    level: 'Expert',
    experience: 3
  },
  [AvailableSkill.Esbuild]: {
    id: AvailableSkill.Esbuild,
    label: 'ESBuild',
    imageUrl: 'technologies/miscellaneous/esbuild.png',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.Ethereum]: {
    id: AvailableSkill.Ethereum,
    label: 'Ethereum',
    imageUrl: 'technologies/miscellaneous/ethereum.png',
    level: 'Intermediate',
    experience: 2
  },
  [AvailableSkill.LLM]: {
    id: AvailableSkill.LLM,
    label: 'LLM',
    imageUrl: 'technologies/miscellaneous/llm.png',
    level: 'Intermediate',
    experience: 2
  },
  [AvailableSkill.OpenAI]: {
    id: AvailableSkill.OpenAI,
    label: 'OpenAI',
    imageUrl: 'technologies/miscellaneous/openai.png',
    level: 'Intermediate',
    experience: 2
  },
  [AvailableSkill.LangChain]: {
    id: AvailableSkill.LangChain,
    label: 'LangChain',
    imageUrl: 'technologies/miscellaneous/langchain.webp',
    level: 'Intermediate',
    experience: 2
  }
};
