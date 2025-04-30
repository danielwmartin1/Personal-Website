import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders welcome message', () => {
  render(<App />);
  const welcomeMessage = screen.getByText((content, element) => {
    return element.tagName.toLowerCase() === 'p' && content.includes("I am a dedicated software engineer with a strong focus on developing scalable and high-performance applications. Proficient in JavaScript, C#, Python, React, .NET, and Node.js, I specialize in delivering robust, efficient, and user-centric solutions. I excel in dynamic environments that prioritize innovation, clean architecture, and modern engineering practices. I am eager to collaborate with a forward-thinking team committed to crafting exceptional applications that drive meaningful impact.");
  });
  expect(welcomeMessage).toBeInTheDocument();
});
