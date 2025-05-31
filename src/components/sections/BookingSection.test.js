import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingSection from './BookingSection';

// Mock AlertDialog to avoid actual dialog rendering
jest.mock('../dialogs/AlertDialog', () => ({
  __esModule: true,
  default: ({ open, message }) => open ? <div data-testid="alert-dialog">{message}</div> : null
}));

describe('BookingSection', () => {
  test('renders initial booking form', () => {
    render(<BookingSection />);
    expect(screen.getByText(/Reserve a Table/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/When/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/How Many/i)).toBeInTheDocument();
    expect(screen.getByText(/Available Times/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Next Step/i })).toBeDisabled();
  });

  test('enables Next button when date and time are selected', () => {
    render(<BookingSection />);
    const timeButton = screen.getByRole('button', { name: /6:00pm/i });
    fireEvent.click(timeButton);
    expect(screen.getByRole('button', { name: /Next Step/i })).toBeEnabled();
  });

  test('shows validation errors on details step', async () => {
    render(<BookingSection />);
    fireEvent.click(screen.getByRole('button', { name: /6:00pm/i }));
    fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));
    fireEvent.click(screen.getByRole('button', { name: /Confirm Booking/i }));
    await waitFor(() => {
      expect(screen.getByText(/First name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Last name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
      // Accept either error for phone field
      expect(
        screen.getByText((content) =>
          /Invalid phone number|Phone number is required/i.test(content)
        )
      ).toBeInTheDocument();
    });
  });

  test('submits form and shows confirmation dialog', async () => {
    render(<BookingSection />);
    fireEvent.click(screen.getByRole('button', { name: /6:00pm/i }));
    fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '123-456-7890' } });
    fireEvent.click(screen.getByRole('button', { name: /Confirm Booking/i }));
    await waitFor(() => {
      expect(screen.getByTestId('alert-dialog')).toHaveTextContent(/Booking confirmed/i);
    });
  });
});
