import { Menu } from '../models/menu';

export const MENUMOCK: Menu[] = [
  {
    routerLink: 'home',
    icon: 'fa-solid fa-copyright',
    label: 'Dashboard',
  },
  {
    routerLink: 'cadastro',
    icon: 'fa-solid fa-registered',
    label: 'Cadastrar',
    items: [
      {
        routerLink: 'cadastro/user',
        label: 'Cadastar Usuario',
      },
      {
        routerLink: 'cadastro/admin',
        label: 'Cadastar Admin',
      },
    ],
  },

  {
    routerLink: 'profile',
    icon: 'fa-solid fa-id-card',
    label: 'Profile',
    items: [
      {
        routerLink: 'profile/user',
        label: 'Profile Usuario',
      },
      {
        routerLink: 'profile/admin',
        label: 'Profile Admin',
      },
    ],
  },
];
