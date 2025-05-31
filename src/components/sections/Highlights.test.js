import React from 'react';
import { render, screen } from '@testing-library/react';
import Highlights from './Highlights';

describe('Highlights', () => {
  it('renders specials section and special cards', () => {
    render(<Highlights />);
    expect(screen.getByText(/greek salad/i)).toBeInTheDocument();
    expect(screen.getByText(/bruschetta/i)).toBeInTheDocument();
    expect(screen.getAllByText(/lemon dessert/i).length).toBeGreaterThan(0);
  });
});
