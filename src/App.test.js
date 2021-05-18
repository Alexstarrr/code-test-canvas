import { render, screen } from '@testing-library/react';
import App from './App';

test('renders convas element', async() => {
  render(<App />);
  const canvas = await screen.findAllByTestId('canvas');
  expect(canvas).toBeInTheDocument();
});
