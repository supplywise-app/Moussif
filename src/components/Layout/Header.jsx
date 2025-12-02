import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
import info from '../../data/info.json';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Galerie', path: '/gallery' },
    { name: 'Artistes', path: '/artists' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <NavLink to="/" className="logo">
          <div className="logo-container">
            <img src="/logo.png" alt={info.name} className="logo-img" />
          </div>
        </NavLink>

        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => isActive ? "active-link" : ""}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ul>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => isActive ? "active-link" : ""}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
