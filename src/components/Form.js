import React, { useState, useEffect } from 'react';
import '../App.css';
import '../buttons.css';

function Form() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);

    useEffect(() => {
        console.log('Form component mounted');
        return () => console.log('Form component unmounted');
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !message) {
            alert('Please fill out both fields.');
            return;
        }

        try {
            const response = await fetch('https://formspree.io/f/mrbgkbky', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, message })
            });
            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-style">
            <label className="label-style">
                Email:
                <input
                    placeholder='youremail@example.com'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-style"
                />
            </label>
            <label className="label-style">
                Message:
                <textarea
                    placeholder='Type your message here...'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="input-style textarea-style"
                />
            </label>
            <button type="submit" className="btn">Submit</button>
            {status === 'success' && <p>Message sent successfully!</p>}
            {status === 'error' && <p>There was an error sending your message.</p>}
        </form>
    );
}

export default Form;
