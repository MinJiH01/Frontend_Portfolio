import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio</div>
      
      <div className="navbar-right">
        {/* Desktop menu */}
        <div className="navbar-links desktop-menu">
          <Link to="/">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar-links mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>About Me</Link>
        <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;