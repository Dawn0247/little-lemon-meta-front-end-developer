import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials';

describe('Testimonials', () => {
  it('renders testimonial cards for each testimonial', () => {
    render(<Testimonials />);
    expect(screen.getByText(/maria/i)).toBeInTheDocument();
    expect(screen.getByText(/john/i)).toBeInTheDocument();
    expect(screen.getByText(/linda/i)).toBeInTheDocument();
    expect(screen.getByText(/alex/i)).toBeInTheDocument();
  });
});
