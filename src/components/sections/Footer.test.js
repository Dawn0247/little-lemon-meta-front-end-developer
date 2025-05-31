import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders logo, navigation, contact, and social media sections', () => {
    render(<Footer />);
    // Accept multiple elements for 'Little Lemon'
    expect(screen.getAllByText(/little lemon/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/navigation/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/social media/i)).toBeInTheDocument();
  });
});
