import React from 'react';
import "../script.js";
import NavBar from './NavBar.js';
import "../header.css";

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