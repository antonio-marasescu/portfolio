export type CleanAbout = {
  content: string;
  topSkills: string[];
};

export type CleanSkillCategory = {
  label: string;
  skills: string[];
};

export type CleanSkills = {
  categories: CleanSkillCategory[];
};

export type CleanWorkPosition = {
  title: string;
  description: string;
  period: string;
  achievements: string[];
};

export type CleanWorkCompany = {
  title: string;
  timeline: CleanWorkPosition[];
};

export type CleanWork = {
  history: CleanWorkCompany[];
};

export type CleanEducation = {
  title: string;
  description: string;
  period: string;
};

export type CleanProject = {
  title: string;
  period: string;
  content: string;
  category: string;
  tags: string[];
};

export type CleanProjects = {
  projects: CleanProject[];
};

export type CleanCertification = {
  name: string;
};

export type CleanCertifications = {
  certifications: CleanCertification[];
};

export type CleanCv = {
  about: CleanAbout;
  skills: CleanSkills;
  work: CleanWork;
  education: { history: CleanEducation[] };
  projects: CleanProjects;
  certifications: CleanCertifications;
};
