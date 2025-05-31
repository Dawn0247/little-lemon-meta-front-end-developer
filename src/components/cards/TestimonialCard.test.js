import React from 'react';
import { render, screen } from '@testing-library/react';
import TestimonialCard from './TestimonialCard';

describe('TestimonialCard', () => {
  const defaultProps = {
    name: 'Maria',
    rating: 4,
    review: 'Great food!',
    photo: 'https://example.com/photo.jpg',
  };

  it('renders name, rating, review, and photo', () => {
    render(<TestimonialCard {...defaultProps} />);
    expect(screen.getByRole('heading', { name: /maria/i })).toBeInTheDocument();
    expect(screen.getByText('Great food!')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /maria/i })).toBeInTheDocument();
    expect(screen.getByText('★★★★')).toBeInTheDocument();
  });

  it('renders placeholder when photo is missing', () => {
    render(<TestimonialCard {...defaultProps} photo={null} />);
    expect(screen.getByText(/photo/i)).toBeInTheDocument();
  });
});
