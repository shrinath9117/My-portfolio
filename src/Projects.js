import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>💼 My Projects</h2>
      <div className="project-container">

        {/* 🛒 Smart Grocery Store */}
        <div
          className="project-card"
          onClick={() =>
            window.open('https://github.com/shrinath9117?tab=repositories', '_blank')
          }
        >
          <h3>🛒 Smart Grocery Store</h3>
          <p>
            The future of grocery shopping with our innovative Smart Grocery Store project.
            Our goal is to revolutionize the traditional grocery store experience by using
            cutting-edge technology to facilitate efficiency and increase customer satisfaction.
          </p>
          <div className="tech-used">
            <strong>Technologies:</strong> HTML, CSS, JavaScript
          </div>
        </div>

        {/* ✈️ Airline Reservation System */}
        <div
          className="project-card"
          onClick={() =>
            window.open('https://github.com/shrinath9117/Airline-Reservation-system', '_blank')
          }
        >
          <h3>✈️ Airline Reservation System</h3>
          <p>
            The Airline Reservation System is a software that helps passengers
             easily book and manage their flights. It allows users to search for
              flights, make reservations, and track their bookings in real-time.
               The system also improves communication between airlines and passengers
               , making the travel experience smoother and more efficient.
              
          </p>
          <div className="tech-used">
            <strong>Technologies:</strong> Html,css,JavaScript,Mysql
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
