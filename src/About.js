import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <i className="fas fa-user-circle"></i>
          <h2>About Me</h2>
        </div>
        <p className="about-text">
          I'm <strong>Shrinath Gawade</strong>, an aspiring <strong>Full Stack Java Developer</strong> currently pursuing a 6-month course at <strong>IT Vedant</strong>.
          Skilled in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong>, with frontend projects that showcase responsive and functional web interfaces.
          I'm passionate about <strong>web development</strong> and have a deep interest in <strong>Kabaddi</strong>, reflecting focus, teamwork, and discipline.
        </p>
      </div>
    </section>
  );
};

export default About;
