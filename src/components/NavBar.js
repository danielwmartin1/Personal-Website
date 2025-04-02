import React, { useState, useEffect, useRef } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import "../styles/header.css";
import toggleIcon from '../images/horizontallines.jpg';
import "../styles/Footer.css"; // Changed 'Footer.css' to 'footer.css' to match the correct case

const NavItems = ({ closeMenu }) => (
  <ul className="nav-items" style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-around' }}>
    <li className="listItem" onClick={closeMenu}><Link to="/">Home</Link></li>
    <li className="listItem" onClick={closeMenu}><Link to="/about">About</Link></li>
    <li className="listItem" onClick={closeMenu}><Link to="/projects">Portfolio</Link></li>
    <li className="listItem" onClick={closeMenu}><Link to="/contact">Contact</Link></li>
  </ul>
);

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
              width: '50px', 
              height: '50px', 
              margin: "0.5rem", 
              padding: "0.25rem", 
              backgroundColor: 'rgb(97, 218, 251)', 
              borderRadius: "6px", 
              textAlign: "right",
              transform: `rotate(${rotation}deg)`, // Apply rotation
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
