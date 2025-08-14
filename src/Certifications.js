import React from 'react';
import './Certifications.css';

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <h2>📜 My Certifications</h2>

      <div className="cert-container">

        <div className="cert-card">
          <h3>JavaScript Essentials</h3>
          <p><strong>Issued by:</strong> IT Vedant</p>
          <p>
            This course covered the fundamentals of JavaScript, including variables, functions, objects, and asynchronous
            programming. It helped strengthen core JavaScript logic building.
          </p>
          <button onClick={() => window.open('/Certification/javascript.pdf', '_blank')}>
            📄 View Certificate
          </button>
        </div>

        <div className="cert-card">
          <h3>Responsive Web Design</h3>
          <p><strong>Issued by:</strong> IT Vedant</p>
          <p>
            Focused on HTML5, CSS3, Flexbox, and Grid to build fully responsive websites. Developed practical layouts
            using media queries and modern design principles.
          </p>
          <button onClick={() => window.open('/Certification/Web.pdf', '_blank')}>
            📄 View Certificate
          </button>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
