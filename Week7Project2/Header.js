import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Travel Wanderlust</div>
        <ul className="nav-links">
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;