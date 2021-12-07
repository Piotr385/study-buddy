import { render, screen } from 'test.utils';
import { setupServer } from 'msw/node';
import { handlers } from 'moks/handlers';
import SearchBar from './SearchBar';
import { fireEvent, waitFor } from '@testing-library/react';

const server = setupServer(...handlers);

describe('SearchBar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Renders the component', () => {
    render(<SearchBar />);
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Find students');
    fireEvent.change(input, { target: { value: 'ad' } });

    await screen.findByText('Adam Romański');
  });

  it('Hides the results when input is empty', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Find students');
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findByText('Adam Romański');

    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      expect(screen.getByLabelText('results-list')).not.toBeVisible();
    });
  });
});
