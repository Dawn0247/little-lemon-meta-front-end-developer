import React from 'react';
import { render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar';

describe('NavigationBar', () => {
  it('renders logo and navigation links', () => {
    render(<NavigationBar />);
    expect(screen.getByText(/little lemon/i)).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/menu/i)).toBeInTheDocument();
    expect(screen.getByText(/booking/i)).toBeInTheDocument();
    expect(screen.getByText(/order online/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    // Login button should not be present
    expect(screen.queryByText(/login/i)).not.toBeInTheDocument();
  });

  it('navbar toggler has aria-label', () => {
    render(<NavigationBar />);
    expect(screen.getByLabelText(/toggle navigation/i)).toBeInTheDocument();
  });
});
