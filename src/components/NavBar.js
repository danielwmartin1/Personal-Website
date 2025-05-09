import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/App.css';
import "../styles/Header.css";
import toggleIcon from '../images/horizontallines.jpg';

const NavItems = ({ closeMenu }) => {
  const location = useLocation();

  return (
    <div className="nav-items" style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Link 
        to="/" 
        className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} 
        onClick={closeMenu}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'} 
        onClick={closeMenu}
      >
        About
      </Link>
      <Link 
        to="/projects" 
        className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'} 
        onClick={closeMenu}
      >
        Portfolio
      </Link>
      <Link 
        to="/contact" 
        className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'} 
        onClick={closeMenu}
      >
        Contact
      </Link>
    </div>
  );
};

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
    const toggleIcon = document.getElementById('toggleIcon');
    if (toggleIcon) {
      toggleIcon.classList.toggle('menu-open', !isOpen); // Add or remove the 'menu-open' class
    }
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
            style={{
              cursor: 'pointer',
              width: '50px',
              height: '50px',
              margin: '0.5rem',
              padding: '0.25rem',
              backgroundColor: 'rgba(97, 218, 251, 0.8)',
              borderRadius: '6px',
              transform: `rotate(${rotation}deg)`, // Apply rotation
              transition: 'transform 0.3s ease-in-out, background-color 0.2s ease-in-out', // Smooth rotation
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
