import { NavbarItem, NavigationItemType } from '../../../types/navigation/navbar.types';

export const NavigationItems: NavbarItem[] = [
  {
    id: NavigationItemType.Overview,
    label: 'Overview',
    icon: 'home'
  },
  {
    id: NavigationItemType.About,
    label: 'About',
    icon: 'person'
  },
  {
    id: NavigationItemType.Experience,
    label: 'Experience',
    icon: 'work',
    items: [
      {
        id: NavigationItemType.Skills,
        label: 'Skills',
        icon: 'settings'
      },
      {
        id: NavigationItemType.Work,
        label: 'Work',
        icon: 'business'
      },
      {
        id: NavigationItemType.Education,
        label: 'Education',
        icon: 'school'
      }
    ]
  },
  {
    id: NavigationItemType.Projects,
    label: 'Projects',
    icon: 'folder'
  },
  {
    id: NavigationItemType.Certifications,
    label: 'Certifications',
    icon: 'check_circle'
  }
];
