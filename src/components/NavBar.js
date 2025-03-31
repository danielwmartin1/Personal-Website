import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import "../script.js";
import "../header.css";

const NavItems = ({ closeMenu }) => (
  <ul className="nav-items">
    <li className="listItem" onClick={closeMenu}><Link to="/">Home</Link></li>
    <li className="listItem" onClick={closeMenu}><Link to="/about">About</Link></li>
    <li className="listItem" onClick={closeMenu}><Link to="/projects">Portfolio</Link></li>
    <li className="listItem" onClick={closeMenu}><Link to="/contact">Contact</Link></li>
  </ul>
);

/**
 * NavBar component that renders a navigation bar with responsive behavior.
 * 
 * @component
 * 
 * @example
 * return (
 *   <NavBar />
 * )
 * 
 * @returns {JSX.Element} The rendered navigation bar component.
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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
      if (isOpen && !event.target.closest('.menu-container') && !event.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    setRotation((prevRotation) => prevRotation + (isOpen ? -90 : 90)); // Rotate based on menu state
  }, [isOpen]);

  return (
    <nav className="navbar">
      {isMobile ? (
        <div className="menu-container">
          <img 
            id="toggleIcon"
            src={require('../images/horizontallines.jpg')} 
            alt="Menu" 
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
          {isOpen && <NavItems closeMenu={closeMenu} />}
        </div>
      ) : (
        <NavItems closeMenu={closeMenu} />
      )}
    </nav>
  );
};

export default NavBar;
