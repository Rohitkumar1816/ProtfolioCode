import React from 'react';
import logo from '../assets/logo.png';
import contactimg from '../../src/assets/contact.png';
import insta from '../../src/assets/instagram.png';

import './navbar.css';
import { Link } from 'react-scroll';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo'/>

      <div>
        <Link
          className="deskstopmenuitem"
          to="about"
          smooth={true}
          duration={500}
        >
          About
        </Link>

        <Link
          className="deskstopmenuitem"
          to="skill"
          smooth={true}
          duration={500}
        >
          Skills
        </Link>

        <Link
          className="deskstopmenuitem"
          to="resume"
          smooth={true}
          duration={500}
        >
          Resume
        </Link>

        <Link
          className="deskstopmenuitem"
          to="contact"
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </div>
<a
  href="https://www.instagram.com/rohitsagar3471?psln=MTdnZjdid3B4aGZlaw=="
  target="_blank"
  rel="noopener noreferrer"
  className="desktopmenubtn"
>
  <img src={insta} alt="Instagram" className="desktomenubtnimage" />
  Follow Me
</a>
    </nav>
  );
};

export default Navbar;