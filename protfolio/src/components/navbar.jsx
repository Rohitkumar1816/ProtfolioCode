
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import insta from '../../src/assets/instagram.png';

import './navbar.css';
import { Link } from 'react-scroll';

export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <img src={logo} alt="logo" className="logo" />

      {/* Hamburger Button */}
      <button
        className="mobilemenu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Navigation Links */}
      <div className={`navlinks ${menuOpen ? 'active' : ''}`}>

        <Link
          className="deskstopmenuitem"
          to="about"
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          About
        </Link>

        <Link
          className="deskstopmenuitem"
          to="skill"
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          Skills
        </Link>

        <Link
          className="deskstopmenuitem"
          to="resume"
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          Resume
        </Link>

        <Link
          className="deskstopmenuitem"
          to="contact"
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          Contact
        </Link>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/rohitsagar3471?psln=MTdnZjdid3B4aGZlaw=="
          target="_blank"
          rel="noopener noreferrer"
          className="desktopmenubtn"
          onClick={closeMenu}
        >
          <img
            src={insta}
            alt="Instagram"
            className="desktomenubtnimage"
          />
          Follow Me
        </a>

      </div>

    </nav>
  );
};

export default Navbar;
