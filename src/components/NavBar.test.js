import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar Component', () => {
    test('renders navigation links', () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );

        const links = ['Home', 'About', 'Portfolio', 'Contact'];
        links.forEach((linkText) => {
            const linkElement = screen.getByText(linkText);
            expect(linkElement).toBeInTheDocument();
        });
    });

    test('toggles menu on mobile view', () => {
        global.innerWidth = 500; // Simulate mobile screen width
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );

        const toggleButton = screen.getByAltText('Toggle Icon');
        expect(toggleButton).toBeInTheDocument();

        fireEvent.click(toggleButton);
        expect(screen.getByText('Home')).toBeInTheDocument(); // Menu should open

        fireEvent.click(toggleButton);
        expect(screen.queryByText('Home')).not.toBeInTheDocument(); // Menu should close
    });

    test('closes menu when clicking outside', () => {
        global.innerWidth = 500; // Simulate mobile screen width
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );

        const toggleButton = screen.getByAltText('Toggle Icon');
        fireEvent.click(toggleButton); // Open menu
        expect(screen.getByText('Home')).toBeInTheDocument();

        fireEvent.mouseDown(document.body); // Simulate clicking outside
        expect(screen.queryByText('Home')).not.toBeInTheDocument(); // Menu should close
    });

    test('does not render toggle button on desktop view', () => {
        global.innerWidth = 1024; // Simulate desktop screen width
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );

        expect(screen.queryByAltText('Toggle Icon')).not.toBeInTheDocument();
    });

    beforeEach(() => {
        // Reset window width before each test
        global.innerWidth = 1024;
    });

    afterEach(() => {
        // Clear any mocks or event listeners
        jest.clearAllMocks();
    });
});
