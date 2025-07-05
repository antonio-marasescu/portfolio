import { Skill, SkillCategory } from './cv-skills.types';
import { WorkCompany } from './cv-work.types';
import { EducationTimeline } from './cv-education.types';
import { Project } from './cv-projects.types';
import { Certification } from './cv-certifications.types';

export enum StandardCvSection {
  Intro = 'intro',
  About = 'about',
  Skills = 'skills',
  Work = 'work',
  Education = 'education',
  Projects = 'projects',
  Certifications = 'certifications'
}

export type Intro = {
  id: StandardCvSection.Intro;
  welcome: string;
  title: string;
  githubUrl: string;
  linkedInUrl: string;
  status: 'available' | 'unavailable';
};

export type About = {
  id: StandardCvSection.About;
  content: string;
  imageUrl: string;
  imageUrlAlt: string;
  topSkills: Skill[];
};

export type Skills = {
  id: StandardCvSection.Skills;
  categories: SkillCategory[];
};

export type Work = {
  id: StandardCvSection.Work;
  history: WorkCompany[];
};

export type Education = {
  id: StandardCvSection.Education;
  history: EducationTimeline[];
};

export type Projects = {
  id: StandardCvSection.Projects;
  projects: Project[];
};

export type Certifications = {
  id: StandardCvSection.Certifications;
  certifications: Certification[];
};

export type StandardCv = {
  intro: Intro;
  about: About;
  skills: Skills;
  work: Work;
  education: Education;
  projects: Projects;
  certifications: Certifications;
};
