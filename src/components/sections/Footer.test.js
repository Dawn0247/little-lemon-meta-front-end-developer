import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders logo, navigation, contact, and social media sections', () => {
    render(<Footer />);
    expect(screen.getByText(/little lemon/i)).toBeInTheDocument();
    expect(screen.getByText(/doormat navigation/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/social media/i)).toBeInTheDocument();
    expect(screen.getByText(/123 main st/i)).toBeInTheDocument();
    expect(screen.getByText(/instagram/i)).toBeInTheDocument();
  });
});
