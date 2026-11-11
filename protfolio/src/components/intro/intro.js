
import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import btnimg from '../../../src/assets/hireme.png';
import img from '../../../src/assets/protfoliopic.jpeg';

export const Intro = () => {
  return (
    <section id="intro">

      <div className="introcontent">
        <span className="hello">Hello,</span>

        <h1 className="introtext">
          I am <span className="introname">Rohit Kumar</span>
          <br />
          Web Developer
        </h1>

        <p className="paraname">
          Building Scalable Solutions Through Code.
        </p>

        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <img src={btnimg} alt="Hire me" />
            Hire Me
          </button>
        </Link>
      </div>

      <div className="introimage">
        <img className="bg" src={img} alt="Rohit Kumar" />
      </div>

    </section>
  );
};

export default Intro;
