import { render, screen } from '@testing-library/react';
import Dashboard from '../pages/dashboard';

// Mock Supabase user + role fetch
jest.mock('../../packages/auth/supabaseClient', () => ({
  supabase: {
    from: jest.fn().mockReturnValue({
      select: jest.fn().mockReturnValue({
        eq: jest.fn().mockReturnValue({
          single: jest.fn().mockResolvedValue({ data: { role: 'admin' } })
        })
      })
    })
  }
}));

describe('Unified Dashboard Role-Based Navigation', () => {
  it('should show all modules for admin', async () => {
    render(<Dashboard />);
    expect(await screen.findByText(/Fleet Management/)).toBeInTheDocument();
    expect(await screen.findByText(/Finance/)).toBeInTheDocument();
    expect(await screen.findByText(/Inventory & Suppliers/)).toBeInTheDocument();
    expect(await screen.findByText(/Customer Checkout/)).toBeInTheDocument();
    expect(await screen.findByText
