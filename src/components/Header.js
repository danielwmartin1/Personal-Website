import React from 'react';
import NavBar from './NavBar.js';
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <nav>
        <NavBar />
      </nav>
    </header>
  );
}

export default Header;