import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  test('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /WhiteRabbt/,
    });

    expect(heading).toBeInTheDocument()
  });

  test('renders the navigation', () => {
      render(<Home />);

      const navigation = screen.getByRole('navigation');

      expect(navigation).toBeInTheDocument();
  });

  test('renders a Welcome message', () => {
      render(<Home />);

      const welcomeMessage = screen.getByText(/Welcome/);

      expect(welcomeMessage).toBeInTheDocument();
  });
})
