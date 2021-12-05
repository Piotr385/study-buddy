import { v4 as uuidv4 } from 'uuid';

export const menuElements = [
  {
    id: uuidv4(),
    value: 'Dashboard',
    to: '/group',
  },
  {
    id: uuidv4(),
    value: 'Add User',
    to: '/add-user',
  },
];
