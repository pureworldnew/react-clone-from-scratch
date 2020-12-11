import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'accounts',
    icon: 'simple-icon-user',
    label: 'menu.accounts',
    to: `${adminRoot}/accounts`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.start',
        to: `${adminRoot}/accounts/start`,
      },
    ],
  },
  {
    id: 'projects',
    icon: 'iconsminds-project',
    label: 'menu.projects',
    to: `${adminRoot}/projects`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.second',
        to: `${adminRoot}/projects/start`,
      },
    ],
  },
  {
    id: 'clients',
    icon: 'simple-icon-people',
    label: 'menu.clients',
    to: `${adminRoot}/clients`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.second',
        to: `${adminRoot}/clients/start`,
      },
    ],
  },
  {
    id: 'times',
    icon: 'iconsminds-alarm-clock',
    label: 'menu.time',
    to: `${adminRoot}/times`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.second',
        to: `${adminRoot}/times/start`,
      },
    ],
  },
  {
    id: 'wallets',
    icon: 'simple-icon-wallet',
    label: 'menu.wallet',
    to: `${adminRoot}/wallets`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.second',
        to: `${adminRoot}/wallets/start`,
      },
    ],
  },
  {
    id: 'blankpage',
    icon: 'iconsminds-bucket',
    label: 'menu.blank-page',
    to: `${adminRoot}/blank-page`,
  },
];
export default data;
