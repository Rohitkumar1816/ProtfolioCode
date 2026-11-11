
import React from 'react';
import './Footer.css';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footercontainer">

        <div className="footerlogo">
          <h2>Rohit<span>.</span></h2>
          <p>
            Java Developer | Software Developer
          </p>
        </div>

        <div className="footerlinks">

          <a href="#intro">Home</a>
          <a href="#about">About</a>
          <a href="#skill">Skills</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footersocial">

          <a href="https://github.com/yourusername"
             target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://linkedin.com/in/yourusername"
             target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href="https://instagram.com/yourusername"
             target="_blank" rel="noreferrer">
            Instagram
          </a>

          <a href="https://facebook.com/yourusername"
             target="_blank" rel="noreferrer">
            Facebook
          </a>

        </div>

      </div>

      <div className="footerbottom">

        <p>
          © {year} Rohit Kumar. All Rights Reserved.
        </p>

        <a href="#intro" className="backtotop">
          Back to Top ↑
        </a>

      </div>

    </footer>
  );
};

export default Footer;
