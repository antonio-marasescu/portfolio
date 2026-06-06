export enum AvailableSkill {
  TypeScript = 'TypeScript',
  JavaScript = 'JavaScript',
  Java = 'Java',
  Python = 'Python',
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
  Flask = 'Flask',
  SqlAlchemy = 'SqlAlchemy',
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
  OpenAiApi = 'OpenAiApi',
  LangChain = 'LangChain',
  ClaudeCode = 'ClaudeCode',
  CodexCli = 'CodexCli',
  CopilotCli = 'CopilotCli'
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
