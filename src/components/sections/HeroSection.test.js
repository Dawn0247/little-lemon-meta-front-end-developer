import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('renders headings, description, and button', () => {
    render(<HeroSection />);
    expect(screen.getByRole('heading', { name: /little lemon/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /chicago/i })).toBeInTheDocument();
    expect(screen.getByText(/family-owned mediterranean/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reserve a table/i })).toBeInTheDocument();
  });

  it('button is focusable and accessible', () => {
    render(<HeroSection />);
    const button = screen.getByRole('button', { name: /reserve a table/i });
    button.focus();
    expect(button).toHaveFocus();
  });
});
