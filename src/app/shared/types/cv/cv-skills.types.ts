export enum AvailableSkill {
  TypeScript = 'TypeScript',
  JavaScript = 'JavaScript',
  Java = 'Java',
  Solidity = 'Solidity',
  Angular = 'Angular',
  React = 'React',
  CSS = 'CSS',
  HTML = 'HTML',
  SASS = 'SASS',
  Tailwind = 'Tailwind',
  Ngrx = 'Ngrx',
  Redux = 'Redux',
  MaterialDesign = 'MaterialDesign',
  Storybook = 'Storybook',
  NodeJS = 'NodeJS',
  SpringBoot = 'SpringBoot',
  AwsLambda = 'AwsLambda',
  ExpressJs = 'ExpressJs',
  NestJs = 'NestJs',
  GraphQl = 'GraphQl',
  PostgreSQL = 'PostgreSQL',
  Sql = 'Sql',
  Dynamodb = 'Dynamodb',
  Jpa = 'Jpa',
  TypeORM = 'TypeORM',
  Terraform = 'Terraform',
  AwsCdk = 'AwsCdk',
  AwsServices = 'AwsServices',
  Docker = 'Docker',
  GithubActions = 'GithubActions',
  Jest = 'Jest',
  Cypress = 'Cypress',
  Git = 'Git',
  Nx = 'Nx',
  Esbuild = 'Esbuild',
  Ethereum = 'Ethereum',
  LLM = 'LLM',
  OpenAI = 'OpenAI',
  LangChain = 'LangChain'
}

export enum AvailableSkillCategory {
  All = 'All',
  Backend = 'Backend',
  Frontend = 'Frontend',
  DevOps = 'DevOps',
  Languages = 'Languages',
  Testing = 'Testing',
  AI = 'AI',
  Miscellaneous = 'Miscellaneous'
}

export type SkillLevel = 'Expert' | 'Intermediate' | 'Beginner';

export type Skill = {
  id: AvailableSkill;
  label: string;
  imageUrl: string;
  level: SkillLevel;
  experience: number;
};

export type SkillCategory = {
  id: AvailableSkillCategory;
  label: string;
  skills: Skill[];
};
