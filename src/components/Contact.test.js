import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './Contact.js';

describe('Contact Component', () => {
    test('renders contact message', () => {
        render(
            <Router>
                <Contact />
            </Router>
        );
        const contactMessage = screen.getByText(/Thank you for visiting my portfolio!/i);
        expect(contactMessage).toBeInTheDocument();
    });

    test('renders contact me heading', () => {
        render(
            <Router>
                <Contact />
            </Router>
        );
        const contactHeading = screen.getByText(/Contact Me:/i);
        expect(contactHeading).toBeInTheDocument();
    });

    test('renders social media icons', () => {
        render(
            <Router>
                <Contact />
            </Router>
        );
        const githubIcon = screen.getByAltText(/GitHub/i);
        const linkedinIcon = screen.getByAltText(/LinkedIn/i);
        const facebookIcon = screen.getByAltText(/Facebook/i);
        const discordIcon = screen.getByAltText(/Discord/i);

        expect(githubIcon).toBeInTheDocument();
        expect(linkedinIcon).toBeInTheDocument();
        expect(facebookIcon).toBeInTheDocument();
        expect(discordIcon).toBeInTheDocument();
    });

    test('renders send message button and opens form in new tab', () => {
            // Mock window.open
            const originalWindowOpen = window.open;
            window.open = jest.fn();
    
            render(
                <Router>
                    <Contact />
                </Router>
            );
            const sendMessageButton = screen.getByText(/Send Message/i);
            expect(sendMessageButton).toBeInTheDocument();
    
            fireEvent.click(sendMessageButton);
            expect(window.open).toHaveBeenCalledWith('/form', '_blank');
    
            // Restore original window.open
            window.open = originalWindowOpen;
    });
});