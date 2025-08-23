import React from 'react';
import './Profile.css'; // Optional if you want to keep styles specific

function Profile() {
  return (
    <section className="hero" id="about">
      <div className="hero-right">
        <h2>Hello, I'm <span>Shrinath Gawade</span></h2>
        <p>
          I'm from <strong>Maharashtra</strong>. I completed my <strong>Bachelor’s in Computer Application (BCA)</strong>
          from <strong>Pune University</strong>. I'm currently pursuing a <strong>Java Full Stack Development Course</strong> 
          at <strong>IT Vedant</strong>, learning <strong>HTML, CSS, JavaScript, and React</strong>. I belong to a <strong>simple 
          and hardworking family</strong>. My <strong>parents are farmers</strong>—my father gave me confidence and motivation, 
          and my mother taught me values like respect and discipline.
        </p>
        <div className="hero-buttons">
          <a href="\shrinath resume (2).pdf" className="btn" download>📄 Download Resume</a>
          <a href="https://www.linkedin.com/in/shrinath-gawade-156278295/" className="btn" target="_blank" rel="noopener noreferrer">
            🔗 Visit LinkedIn Profile
          </a>
        </div>
      </div>

      {/* <div className="hero-left">
       <img src="shrinath.png" alt="Shrinath Gawade" className="profile-img" />
    </div>  */}
    </section>
  );
}

export default Profile;
 