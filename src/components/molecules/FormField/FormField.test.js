import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Form FormField', () => {
  it('Render the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />)
  });
})