import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders children and applies className', () => {
    render(<Card className="custom-class">Test Content</Card>);
    const card = screen.getByText('Test Content').closest('div');
    expect(card).toHaveClass('card');
    expect(card).toHaveClass('custom-class');
  });
});
