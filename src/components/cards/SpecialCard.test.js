import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SpecialCard from './SpecialCard';

describe('SpecialCard', () => {
  const defaultProps = {
    title: 'Greek Salad',
    price: '$12.99',
    description: 'Crispy lettuce, peppers, olives, and feta cheese.',
    image: 'https://example.com/salad.jpg',
    link: 'https://order.com/greek-salad',
  };

  it('renders main elements', () => {
    render(<SpecialCard {...defaultProps} />);
    expect(screen.getByRole('heading', { name: /greek salad/i })).toBeInTheDocument();
    expect(screen.getByText('$12.99')).toBeInTheDocument();
    expect(screen.getByText(/crispy lettuce/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /greek salad/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /order a delivery/i })).toHaveAttribute('href', defaultProps.link);
  });

  it('renders placeholder when image is missing', () => {
    render(<SpecialCard {...defaultProps} image={null} />);
    expect(screen.getByText(/image/i)).toBeInTheDocument();
  });

  it('does not render order button if link is missing', () => {
    render(<SpecialCard {...defaultProps} link={null} />);
    expect(screen.queryByRole('link', { name: /order a delivery/i })).not.toBeInTheDocument();
  });

  it('ensures accessibility tags are present', () => {
    render(<SpecialCard {...defaultProps} />);
    const img = screen.getByRole('img', { name: /greek salad/i });
    expect(img).toHaveAttribute('alt', 'Greek Salad');
  });

  it('simulates clicking the order button', () => {
    render(<SpecialCard {...defaultProps} />);
    const orderBtn = screen.getByRole('link', { name: /order a delivery/i });
    fireEvent.click(orderBtn);
    // Since it's a link, we just check it exists and is clickable
    expect(orderBtn).toHaveAttribute('href', defaultProps.link);
  });
});
