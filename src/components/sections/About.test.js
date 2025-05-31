import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('renders headings and description', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /little lemon/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /chicago/i })).toBeInTheDocument();
    expect(screen.getByText(/adrian and mario/i)).toBeInTheDocument();
  });

  it('renders about images placeholders', () => {
    render(<About />);
    expect(screen.getByText(/adrian/i)).toBeInTheDocument();
    expect(screen.getByText(/mario/i)).toBeInTheDocument();
  });
});
