import React, { useState, useEffect } from 'react';
import { Sun, Moon, MessageCircle, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="nav-logo" onClick={closeMenu}>
          SG<span className="dot">.</span>
        </a>
        
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#work" className="nav-link">Work</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-nav-links">
            <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a>
            <a href="#experience" className="mobile-nav-link" onClick={closeMenu}>Experience</a>
            <a href="#work" className="mobile-nav-link" onClick={closeMenu}>Work</a>
            <a href="#skills" className="mobile-nav-link" onClick={closeMenu}>Skills</a>
            <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
