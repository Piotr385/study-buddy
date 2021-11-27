import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import AddUser from 'views/AddUser';
import Dashboard from '../Dashboard';

describe('AddUser', () => {
  it('Render the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), {
      target: { value: 'Piotr Kułakowski' },
    });
    fireEvent.change(screen.getByTestId('Attendance'), {
      target: { value: '86%' },
    });
    fireEvent.change(screen.getByTestId('Average'), {
      target: { value: '4.6' },
    });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Piotr Kułakowski');
  });
});
