import { NavbarItem, NavigationItemType } from '../../../types/navigation/navbar.types';

export const NavigationItems: NavbarItem[] = [
  {
    id: NavigationItemType.Overview,
    label: 'Overview',
    icon: 'pi pi-home'
  },
  {
    id: NavigationItemType.About,
    label: 'About',
    icon: 'pi pi-user'
  },
  {
    id: NavigationItemType.Experience,
    label: 'Experience',
    icon: 'pi pi-briefcase',
    items: [
      {
        id: NavigationItemType.Skills,
        label: 'Skills',
        icon: 'pi pi-cog'
      },
      {
        id: NavigationItemType.Work,
        label: 'Work',
        icon: 'pi pi-building'
      },
      {
        id: NavigationItemType.Education,
        label: 'Education',
        icon: 'pi pi-book'
      }
    ]
  },
  {
    id: NavigationItemType.Projects,
    label: 'Projects',
    icon: 'pi pi-folder'
  },
  {
    id: NavigationItemType.Certifications,
    label: 'Certifications',
    icon: 'pi pi-check-circle'
  }
];
