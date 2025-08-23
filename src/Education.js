import React from 'react';
import './Education.css'; // ✅ matches 'Education.css'


const Education = () => {
  return (
    <section className="education" id="education">
      <h2>🎓 Education</h2>
      <div className="edu-container">

        <div className="edu-card">
          <h3>Full Stack Java Web Development</h3>
          <p><strong>Institute:</strong> IT Vedant</p>
          <p><strong>Duration:</strong> 6 Months</p>
          <p><strong>Technologies:</strong> HTML, CSS, JavaScript, React, Java,  My Sql</p>
          <p><strong>Status:</strong> Ongoing</p>
        </div>

        <div className="edu-card">
          <h3>Bachelor's in Computer Application</h3>
          <p><strong>University:</strong> Pune University</p>
          <p><strong>Duration:</strong> 2022 – 2025</p>
          <p><strong>Result:</strong> 6.33 CGPA</p>
          <p><strong>Location:</strong> Ahilyanagar</p>
        </div>

        <div className="edu-card">
          <h3>12th Standard (HSC)</h3>
          <p><strong>Board:</strong> Maharashtra State Board</p>
          <p><strong>Duration:</strong> 2021 – 2022</p>
          <p><strong>Result:</strong> 67.65%</p>
        </div>

        <div className="edu-card">
          <h3>10th Standard (SSC)</h3>
          <p><strong>Board:</strong> Maharashtra State Board</p>
          <p><strong>Duration:</strong> 2019 – 2020</p>
          <p><strong>Result:</strong> 77.76%</p>
        </div>

      </div>
    </section>
  );
};

export default Education;
