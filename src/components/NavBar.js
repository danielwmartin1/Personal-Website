import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/App.css';
import "../styles/Header.css";
import toggleIcon from '../images/horizontallines.jpg';

const NavItems = ({ closeMenu }) => {
  const location = useLocation();

  return (
    <ul className="nav-items" style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-around' }}>
      <li className="listItem" onClick={closeMenu}>
        <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
      </li>
      <li className="listItem" onClick={closeMenu}>
        <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>About</Link>
      </li>
      <li className="listItem" onClick={closeMenu}>
        <Link to="/projects" className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
      </li>
      <li className="listItem" onClick={closeMenu}>
        <Link to="/contact" className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
      </li>
    </ul>
  );
};

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setRotation(0); // Reset rotation when switching to desktop view
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const header = document.querySelector('header'); // Select the header element
      if (isOpen && header && !header.contains(event.target)) {
        closeMenu(); // Close the menu if the click is outside the header
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    setRotation(isOpen ? -90 : 0); // Rotate to -90 when open, reset to 0 when closed
  }, [isOpen]);

  return (
    <nav className="navbar">
      {isMobile ? (
        <div className={`menu-container ${isOpen ? 'open' : ''}`}>
          <img 
            id="toggleIcon"
            src={toggleIcon} 
            alt="Toggle Icon" 
            onClick={toggleMenu} 
            className="menu-button" 
            style={{ 
              cursor: 'pointer', 
              width: '50px', 
              height: '50px', 
              margin: "0.5rem", 
              padding: "0.25rem", 
              backgroundColor: 'rgba(97, 218, 251, 0.8)', 
              borderRadius: "6px", 
              transform: `rotate(${rotation}deg)`, // Apply rotation
              transition: 'transform 0.2s ease-in-out', // Smooth rotation transition
            }} 
          />
          {isOpen && (
            <NavItems closeMenu={closeMenu} />
          )}
        </div>
      ) : (
        <NavItems closeMenu={closeMenu} />
      )}
    </nav>
  );
};

export default NavBar;
