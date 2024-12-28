import React from 'react';
import '../App.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p id="footer">Daniel Martin &copy; {currentYear}</p>
        </footer>
    );
};

export default Footer;