// src/pages/Skills.js
import React, { useState } from 'react';
import './Skills.css'; // Make sure this file exists

const Skills = () => {
  const [skillInfo, setSkillInfo] = useState('');

  const showSkill = (name, level) => {
    setSkillInfo(`<p><strong>${name}</strong> — Skill Level: <span>${level}</span></p>`);
  };

  return (
    <section className="skills" id="skills">
      <h2>🛠️ My Skills</h2>

      <div className="skill-container">
        <button className="skill-btn" onClick={() => showSkill('HTML', 'Advanced')}>HTML</button>
        <button className="skill-btn" onClick={() => showSkill('CSS', 'Intermediate')}>CSS</button>
        <button className="skill-btn" onClick={() => showSkill('JavaScript', 'Intermediate')}>JavaScript</button>
        <button className="skill-btn" onClick={() => showSkill('React', 'Beginner')}>React</button>
        <button className="skill-btn" onClick={() => showSkill('Java', 'Beginner')}>Java</button>
        <button className="skill-btn" onClick={() => showSkill('My sql', 'Beginner')}>MySql</button>
      </div>

      <div
        id="skill-output"
        className="skill-output"
        dangerouslySetInnerHTML={{
          __html: skillInfo || '<p>Click on a skill to view level.</p>',
        }}
      />
    </section>
  );
};

export default Skills;
