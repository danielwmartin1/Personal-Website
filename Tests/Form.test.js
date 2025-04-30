import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from '../src/components/Form.js';

describe('Form Component', () => {
    test('renders form correctly', () => {
        render(<Form />);
        expect(screen.getByPlaceholderText('youremail@example.com')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Type your message here...')).toBeInTheDocument();
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    test('shows alert when fields are empty', () => {
        render(<Form />);
        window.alert = jest.fn();
        fireEvent.click(screen.getByText('Submit'));
        expect(window.alert).toHaveBeenCalledWith('Please fill out both fields.');
    });

    test('submits form with valid data', async () => {
        render(<Form />);
        global.fetch = jest.fn(() =>
            Promise.resolve({
                headers: { get: () => 'application/json' },
                json: () => Promise.resolve({ success: true })
            })
        );

        fireEvent.change(screen.getByPlaceholderText('youremail@example.com'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Type your message here...'), { target: { value: 'Test message' } });
        fireEvent.click(screen.getByText('Submit'));

        await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
            'https://formspree.io/f/mrbgkbky',
            expect.objectContaining({
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: 'test@example.com', message: 'Test message' })
            })
        ));
    });

    test('shows success popup on successful submission', async () => {
        render(<Form />);
        global.fetch = jest.fn(() =>
            Promise.resolve({
                headers: { get: () => 'application/json' },
                json: () => Promise.resolve({ success: true })
            })
        );

        fireEvent.change(screen.getByPlaceholderText('youremail@example.com'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Type your message here...'), { target: { value: 'Test message' } });
        fireEvent.click(screen.getByText('Submit'));

        expect(await screen.findByText('Message sent successfully!')).toBeInTheDocument();
    });

    test('shows error popup on failed submission', async () => {
        render(<Form />);
        global.fetch = jest.fn(() => Promise.reject('API is down'));

        fireEvent.change(screen.getByPlaceholderText('youremail@example.com'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Type your message here...'), { target: { value: 'Test message' } });
        fireEvent.click(screen.getByText('Submit'));

        expect(await screen.findByText('There was an error sending your message.')).toBeInTheDocument();
    });
});