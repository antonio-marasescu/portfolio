import { AvailableSkill, Skill } from '../../../types/cv/cv-skills.types';

export const CvAvailableSkills: Record<AvailableSkill, Skill> = {
  [AvailableSkill.TypeScript]: {
    id: AvailableSkill.TypeScript,
    label: 'TypeScript',
    imageUrl: 'technologies/languages/typescript.webp',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.JavaScript]: {
    id: AvailableSkill.JavaScript,
    label: 'JavaScript',
    imageUrl: 'technologies/languages/javascript.webp',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.Java]: {
    id: AvailableSkill.Java,
    label: 'Java',
    imageUrl: 'technologies/languages/java.webp',
    level: 'Intermediate',
    experience: 5
  },
  [AvailableSkill.Solidity]: {
    id: AvailableSkill.Solidity,
    label: 'Solidity',
    imageUrl: 'technologies/languages/solidity.webp',
    level: 'Beginner',
    experience: 1
  },
  [AvailableSkill.Angular]: {
    id: AvailableSkill.Angular,
    label: 'Angular',
    imageUrl: 'technologies/frontend/angular.webp',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.React]: {
    id: AvailableSkill.React,
    label: 'React',
    imageUrl: 'technologies/frontend/react.webp',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.CSS]: {
    id: AvailableSkill.CSS,
    label: 'CSS',
    imageUrl: 'technologies/frontend/css.webp',
    level: 'Intermediate',
    experience: 4
  },
  [AvailableSkill.HTML]: {
    id: AvailableSkill.HTML,
    label: 'HTML',
    imageUrl: 'technologies/frontend/html.webp',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.SASS]: {
    id: AvailableSkill.SASS,
    label: 'SASS',
    imageUrl: 'technologies/frontend/sass.webp',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.Tailwind]: {
    id: AvailableSkill.Tailwind,
    label: 'Tailwind',
    imageUrl: 'technologies/frontend/tailwind.webp',
    level: 'Expert',
    experience: 3
  },
  [AvailableSkill.Ngrx]: {
    id: AvailableSkill.Ngrx,
    label: 'NGRX',
    imageUrl: 'technologies/frontend/ngrx.webp',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.Redux]: {
    id: AvailableSkill.Redux,
    label: 'Redux',
    imageUrl: 'technologies/frontend/redux.webp',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.MaterialDesign]: {
    id: AvailableSkill.MaterialDesign,
    label: 'Material Design',
    imageUrl: 'technologies/frontend/material-design.webp',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.Storybook]: {
    id: AvailableSkill.Storybook,
    label: 'Storybook',
    imageUrl: 'technologies/frontend/storybook.webp',
    level: 'Expert',
    experience: 3
  },
  [AvailableSkill.NodeJS]: {
    id: AvailableSkill.NodeJS,
    label: 'NodeJs',
    imageUrl: 'technologies/backend/nodejs.webp',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.SpringBoot]: {
    id: AvailableSkill.SpringBoot,
    label: 'Spring Boot',
    imageUrl: 'technologies/backend/spring-boot.webp',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.AwsLambda]: {
    id: AvailableSkill.AwsLambda,
    label: 'AWS Lambda',
    imageUrl: 'technologies/backend/aws-lambda.webp',
    level: 'Expert',
    experience: 3
  },
  [AvailableSkill.ExpressJs]: {
    id: AvailableSkill.ExpressJs,
    label: 'ExpressJs',
    imageUrl: 'technologies/backend/express.webp',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.NestJs]: {
    id: AvailableSkill.NestJs,
    label: 'NestJs',
    imageUrl: 'technologies/backend/nestjs.webp',
    level: 'Expert',
    experience: 4
  },
  [AvailableSkill.GraphQl]: {
    id: AvailableSkill.GraphQl,
    label: 'GraphQL',
    imageUrl: 'technologies/backend/graphql.webp',
    level: 'Intermediate',
    experience: 2
  },
  [AvailableSkill.PostgreSQL]: {
    id: AvailableSkill.PostgreSQL,
    label: 'PostgreSQL',
    imageUrl: 'technologies/backend/postgresql.webp',
    level: 'Intermediate',
    experience: 4
  },
  [AvailableSkill.Sql]: {
    id: AvailableSkill.Sql,
    label: 'SQL',
    imageUrl: 'technologies/backend/sql.webp',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.Dynamodb]: {
    id: AvailableSkill.Dynamodb,
    label: 'Dynamodb',
    imageUrl: 'technologies/backend/dynamodb.webp',
    level: 'Intermediate',
    experience: 2
  },
  [AvailableSkill.Jpa]: {
    id: AvailableSkill.Jpa,
    label: 'JPA',
    imageUrl: 'technologies/backend/jpa.webp',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.TypeORM]: {
    id: AvailableSkill.TypeORM,
    label: 'TypeORM',
    imageUrl: 'technologies/backend/typeorm.webp',
    level: 'Expert',
    experience: 3
  },
  [AvailableSkill.Terraform]: {
    id: AvailableSkill.Terraform,
    label: 'Terraform',
    imageUrl: 'technologies/devops/terraform.webp',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.AwsCdk]: {
    id: AvailableSkill.AwsCdk,
    label: 'AWS CDK',
    imageUrl: 'technologies/devops/aws-cdk.webp',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.AwsServices]: {
    id: AvailableSkill.AwsServices,
    label: 'AWS Services',
    imageUrl: 'technologies/devops/aws.webp',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.Docker]: {
    id: AvailableSkill.Docker,
    label: 'Docker',
    imageUrl: 'technologies/devops/docker.webp',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.GithubActions]: {
    id: AvailableSkill.GithubActions,
    label: 'Github Actions',
    imageUrl: 'technologies/devops/github-actions.webp',
    level: 'Expert',
    experience: 3
  },
  [AvailableSkill.Jest]: {
    id: AvailableSkill.Jest,
    label: 'Jest',
    imageUrl: 'technologies/testing/jest.webp',
    level: 'Expert',
    experience: 3
  },
  [AvailableSkill.Cypress]: {
    id: AvailableSkill.Cypress,
    label: 'Cypress',
    imageUrl: 'technologies/testing/cypress.webp',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.Git]: {
    id: AvailableSkill.Git,
    label: 'Git',
    imageUrl: 'technologies/miscellaneous/git.webp',
    level: 'Expert',
    experience: 5
  },
  [AvailableSkill.Nx]: {
    id: AvailableSkill.Nx,
    label: 'Nx',
    imageUrl: 'technologies/miscellaneous/nx.webp',
    level: 'Expert',
    experience: 3
  },
  [AvailableSkill.Esbuild]: {
    id: AvailableSkill.Esbuild,
    label: 'ESBuild',
    imageUrl: 'technologies/miscellaneous/esbuild.webp',
    level: 'Intermediate',
    experience: 3
  },
  [AvailableSkill.Ethereum]: {
    id: AvailableSkill.Ethereum,
    label: 'Ethereum',
    imageUrl: 'technologies/miscellaneous/ethereum.webp',
    level: 'Intermediate',
    experience: 2
  },
  [AvailableSkill.LLM]: {
    id: AvailableSkill.LLM,
    label: 'LLM',
    imageUrl: 'technologies/miscellaneous/llm.webp',
    level: 'Intermediate',
    experience: 2
  },
  [AvailableSkill.OpenAI]: {
    id: AvailableSkill.OpenAI,
    label: 'OpenAI',
    imageUrl: 'technologies/miscellaneous/openai.webp',
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
