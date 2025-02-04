import { NavigationSection } from '@/components/types/navigation.types.ts';

export const NavigationSections = {
    Home: {
        id: 'home',
        label: 'Home'
    } as NavigationSection,
    About: {
        id: 'about',
        label: 'About Myself'
    } as NavigationSection,
    Skills: {
        id: 'skills',
        label: 'Skills'
    } as NavigationSection,
    WorkHistory: {
        id: 'work-history',
        label: 'Work History'
    } as NavigationSection,
    Education: {
        id: 'education',
        label: 'Education'
    } as NavigationSection,
    Certifications: {
        id: 'certifications',
        label: 'Certifications'
    } as NavigationSection,
    Projects: {
        id: 'projects',
        label: 'Projects'
    } as NavigationSection
};

type NavigationSectionKey = keyof typeof NavigationSections;

export const NavigationSectionsList = Object.keys(NavigationSections).map(
    key => NavigationSections[key as NavigationSectionKey]
);
