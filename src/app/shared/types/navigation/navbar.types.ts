import { MenuItem } from 'primeng/api';

export enum NavigationItemType {
  Overview = 'overview',
  About = 'about',
  Experience = 'experience',
  Skills = 'skills',
  Work = 'Work',
  Education = 'education',
  Projects = 'projects',
  Certifications = 'certifications'
}

export type NavbarItem = {
  id: string;
} & MenuItem;
