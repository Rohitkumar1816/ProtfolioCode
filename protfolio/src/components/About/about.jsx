
import React from 'react';
import aboutimg from '../../assets/About.png'
import './about.css';

const About = () => {
  return (
    <section id="about">

      <h1 className="abouttitle">About Me</h1>

      <div className="aboutcontainer">

        {/* Left Image */}
        <div className="aboutimage">
          <img
            src={aboutimg}
            alt="Developer Workspace"
          />
        </div>

        {/* Right Content */}
        <div className="aboutcontent">

          <h2>I'm a Java Developer</h2>

          <p>
            Hello! I'm a passionate software developer interested
            in building scalable and efficient web applications.
            I enjoy solving programming problems and learning
            new technologies.
          </p>

          <p>
            I have knowledge of Core Java, OOPs, JDBC, MySQL,
            Spring Boot, HTML, CSS, JavaScript and React.
            I have also worked on real-world projects like
            an Online Course Platform.
          </p>

          <p>
            My goal is to become a skilled Java Backend Developer
            and build high-quality software applications.
          </p>

          {/* Education */}
          <h2 className="educationheading">Education</h2>

          <div className="educationcontainer">

            <div className="educationcard">
              <div className="educationicon">🎓</div>

              <div>
                <h3>Master of Computer Applications (MCA)</h3>
                <p>Galgotias College of Engineering and Technology</p>
                <span>Greater Noida | Pursuing</span>
              </div>
            </div>

            <div className="educationcard">
              <div className="educationicon">🎓</div>

              <div>
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <p>CIMAGE College</p>
                <span>Patna | 2023 - 2026</span>
              </div>
            </div>

          </div>
<a
  href="RohitJavaDev.pdf"
  download="RohitJavaDev.pdf"
  id="resume"
  className="aboutbtn"
>
  Download Resume
</a>
        </div>
      </div>

    </section>
  );
};

export default About;
