
import React from 'react';
import './skil.css';

const Skil = () => {
  const skills = [
    {
      name: 'Java Development',
      desc: 'Core Java, OOPs, Collections, JDBC and Exception Handling.',
      icon: '☕'
    },
    {
      name: 'Spring Boot',
      desc: 'Building REST APIs, Spring MVC, Spring Data JPA and Backend Development.',
      icon: '🍃'
    },
    {
      name: 'MySQL',
      desc: 'Database Design, SQL Queries, Joins and CRUD Operations.',
      icon: '🗄️'
    },
    {
      name: 'React.js',
      desc: 'Building responsive user interfaces using React components and hooks.',
      icon: '⚛️'
    },
    {
      name: 'HTML & CSS',
      desc: 'Creating structured and responsive web pages.',
      icon: '🌐'
    },
    {
      name: 'JavaScript',
      desc: 'DOM Manipulation, Events and JavaScript Fundamentals.',
      icon: '📜'
    }
  ];

  return (
    <section id="skill">
      <span className="skilltitle">What I Do</span>

      <p className="skilldesc">
        I am a passionate developer focused on Java Backend
        Development and building modern web applications.
      </p>

      <div className="skillcontainer">
        {skills.map((skill, index) => (
          <div className="skillbars" key={index}>
            <div className="skillbarimg">
              {skill.icon}
            </div>

            <div className="skillbartext">
              <h2>{skill.name}</h2>
              <p>{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skil;
