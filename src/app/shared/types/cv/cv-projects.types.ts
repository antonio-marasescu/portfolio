export type ProjectCategory = 'Work' | 'Personal';

export type Project = {
  id: string;
  title: string;
  period: string;
  content: string;
  url?: string;
  isGithub?: boolean;
  category: ProjectCategory;
  tags: string[];
};
