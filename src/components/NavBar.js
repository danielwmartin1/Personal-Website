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

/**
 * NavBar component that renders a navigation bar with responsive behavior.

 * 
 * @description
 * - Uses `useState` to manage the state of whether the view is mobile (`isMobile`) and whether the menu is open (`isOpen`).
 * - Uses `useEffect` to add event listeners for window resize and mouse click outside the menu.
 * - Renders a button to toggle the menu on mobile view and the navigation items.
 * 
 * @notes
 * - `isMobile` state is initially set based on the window width.
 * - `handleResize` updates `isMobile` state on window resize.
 * - `toggleMenu` toggles the `isOpen` state.
 * - `closeMenu` sets `isOpen` to false.
 * - `handleClickOutside` closes the menu if a click is detected outside the menu container and button.
 */
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const toggleIconRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.menu-container') && !event.target.closest('#toggleIcon')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    setRotation(isOpen ? -90 : 0); // Set rotation directly based on isOpen state
  }, [isOpen]);



  return (
    <nav className="navbar">
      {isMobile ? (
        <div className={`menu-container ${isOpen ? 'open' : ''}`}>
          <img 
            id="toggleIcon"
            ref={toggleIconRef}
            src={toggleIcon} 
            alt="Toggle Icon" 
            onClick={toggleMenu} 
            className="menu-button" 
            style={{ 
              cursor: 'pointer', 
              width: '45px', 
              height: '45px', 
              margin: "var(--margin-small)", 
              padding: "0.25rem", 
              backgroundColor: 'rgba(97, 218, 251, 0.8)', 
              borderRadius: "6px", 
              transform: `rotate(${rotation}deg)`, // Apply rotation
              transition: 'transform 0.3s ease', // Smooth transition for rotation
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
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

// Add hover and click effects for nav-items in the CSS file (header.css or App.css)
// Example:
// .nav-items .listItem:hover {
//   transform: scale(1.1);
//   transition: transform 0.3s ease;
// }
// .nav-items .listItem:active {
//   transform: scale(0.95);
//   transition: transform 0.1s ease;
// }

export default NavBar;
