import { render, screen } from '@testing-library/react';
import App from '../src/components/App.js';

test('renders welcome message', () => {
  render(<App />);
  const welcomeMessage = screen.getByText((content, element) => {
    return element.tagName.toLowerCase() === 'p' && content.includes("Welcome! I’m a full-stack developer passionate about technology and problem-solving.");
  });
  expect(welcomeMessage).toBeInTheDocument();
});