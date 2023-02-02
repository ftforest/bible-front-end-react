import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('empty span', () => {
  render(<App />);
  expect(screen.getByTestId('empty')).toBeEmptyDOMElement();
});
