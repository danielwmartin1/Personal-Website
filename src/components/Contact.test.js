import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Contact from './Contact';

describe('Contact Component', () => {
    beforeEach(() => {
        // Mock window.open
        global.open = jest.fn();
    });

    afterEach(() => {
        // Clear mocks after each test
        jest.clearAllMocks();
    });

    test('renders contact message', () => {
        render(
            <MemoryRouter>
                <Contact />
            </MemoryRouter>
        );
        expect(screen.getByText(/Thank you for visiting my portfolio!/i)).toBeInTheDocument();
    });

    test('renders "Contact Me" heading', () => {
        render(
            <MemoryRouter>
                <Contact />
            </MemoryRouter>
        );
        expect(screen.getByText('Contact Me:')).toBeInTheDocument();
    });

    test('renders "Find me on" heading', () => {
        render(
            <MemoryRouter>
                <Contact />
            </MemoryRouter>
        );
        expect(screen.getByText('Find me on:')).toBeInTheDocument();
    });

    test('renders social media icons with correct links', () => {
        render(
            <MemoryRouter>
                <Contact />
            </MemoryRouter>
        );

        const socialLinks = [
            { alt: 'GitHub', href: 'https://www.github.com/danielwmartin1' },
            { alt: 'LinkedIn', href: 'https://www.linkedin.com/in/danielmartin82/' },
            { alt: 'Facebook', href: 'https://www.facebook.com/daniel.martin' },
            { alt: 'Discord', href: 'https://discord.com/users/danielmartin' },
            { alt: 'leetCode', href: 'https://leetcode.com/u/danielwmartin1/' },
            { alt: 'Stack Overflow', href: 'https://stackoverflow.com/users/19347547/daniel-martin/' },
        ];

        socialLinks.forEach(({ alt, href }) => {
            const linkElement = screen.getByTitle(alt);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute('href', href);
        });
    });

    test('renders "Send Message" button and navigates to form', () => {
        render(
            <MemoryRouter>
                <Contact />
            </MemoryRouter>
        );

        const button = screen.getByTitle('Contact Form');
        expect(button).toBeInTheDocument();

        fireEvent.click(button);
        expect(global.open).toHaveBeenCalledWith('/form', '_blank');
    });
});