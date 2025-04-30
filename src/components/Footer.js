import React from 'react';
import '../styles/App.css';
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p id="footer">Daniel Martin &copy; {currentYear}</p>
        </footer>
    );
};

export default Footer;