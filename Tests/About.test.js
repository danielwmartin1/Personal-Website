import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../src/components/About';

describe('About Component', () => {
    test('renders Introduction section', () => {
        render(<About />);
        expect(screen.getByText('Introduction')).toBeInTheDocument();
        expect(screen.getByText(/Welcome to my personal project!/i)).toBeInTheDocument();
    });

    test('renders Background section', () => {
        render(<About />);
        expect(screen.getByText('Background')).toBeInTheDocument();
        expect(screen.getByText(/I dedicated 15 years as a nurse/i)).toBeInTheDocument();
    });

    test('renders Hobbies section', () => {
        render(<About />);
        expect(screen.getByText('Hobbies')).toBeInTheDocument();
        const hobbies = ['Coding', 'Tennis', 'Gaming', 'Gardening/Landscaping', 'Learning new technologies'];
        hobbies.forEach((hobby) => {
            expect(screen.getByText(hobby)).toBeInTheDocument();
        });
    });

    test('renders Continuing-Education section', () => {
        render(<About />);
        expect(screen.getByText('Continuing-Education')).toBeInTheDocument();
    });

    test('renders all logos with correct links in Continuing-Education section', () => {
        render(<About />);
        const logos = [
            { name: 'Udemy', url: 'https://www.udemy.com/user/daniel-martin-504/' },
            { name: 'Gale Udemy', url: 'https://gale.udemy.com/user/daniel-martin-550/' },
            { name: 'Harvard CS50', url: 'https://cs50.harvard.edu/' },
            { name: 'Codecademy', url: 'https://www.codecademy.com/profiles/dwm1982' },
            { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/' },
            { name: 'W3Schools', url: 'https://pathfinder.w3schools.com/' },
            { name: 'ColorCode.io', url: 'https://colorcode.io/' },
            { name: 'ZeroToMastery', url: 'https://zerotomastery.io/' },
            { name: 'LeetCode', url: 'https://leetcode.com/u/danielwmartin1/' },
            { name: 'React', url: 'https://react.dev/learn/' },
            { name: 'StackOverFlow', url: 'https://stackoverflow.com/users/19347547/daniel-martin/' },
            { name: 'MDN', url: 'https://developer.mozilla.org/' },
        ];

        logos.forEach(({ name, url }) => {
            const logoElement = screen.getByAltText(`${name} Logo`);
            expect(logoElement).toBeInTheDocument();
            fireEvent.click(logoElement);
            expect(window.open).toHaveBeenCalledWith(url, '_blank');
        });
    });

    beforeEach(() => {
        // Mock window.open
        global.open = jest.fn();
    });

    afterEach(() => {
        // Clear mocks after each test
        jest.clearAllMocks();
    });
});