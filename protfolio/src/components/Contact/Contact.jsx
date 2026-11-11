
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Contact form submitted successfully!');

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact">

      <h1 className="contacttitle">Contact Me</h1>

      <p className="contactdesc">
        Have a question or want to work together?
        Feel free to contact me.
      </p>

      <div className="contactcontainer">

        {/* Left Side */}

        <div className="contactinfo">

          <h2>Let's Connect</h2>

          <p>
            I'm always open to discussing new projects,
            creative ideas and opportunities.
          </p>

          <div className="contactitem">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>rohitkumarbca18@gmail.com</p>
            </div>
          </div>

          <div className="contactitem">
            <span>📱</span>
            <div>
              <h3>Phone</h3>
              <p>+91 6205260328</p>
            </div>
          </div>

          <div className="contactitem">
            <span>📍</span>
            <div>
              <h3>Location</h3>
              <p>India</p>
            </div>
          </div>

          <div className="sociallinks">
            <a href="https://github.com/Rohitkumar1816" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/rohit-kumar-30b057291" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            
          </div>

        </div>

        {/* Right Side Form */}

        <form className="contactform" onSubmit={handleSubmit}>

          <h2>Send Me a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;
