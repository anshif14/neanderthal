import React, { useState } from 'react';
import './Header.css'; // We will create this CSS file next

const Header = () => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <header className="header">
      <div 
        className={`logo ${hovered ? 'logo-hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Using a text-based logo instead of an image */}
        <div className="logo-text">N</div>
        <span>NEANDERTHAL</span> 
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="menu-icon">
        {/* Add a hamburger icon for mobile view later */}
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header; 