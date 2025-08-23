// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

// Page Components
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Certifications from "./Certifications";
import About from "./About";
import Contact from "./Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <header className="navbar">
        <div className="container">
          <h1>Shrinath Gawade</h1>
          <button className="menu-btn" onClick={toggleMenu}>☰</button>

          <nav className={menuOpen ? "nav-open" : ""}>
            <ul>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/education" onClick={closeMenu}>Education</Link></li>
              <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
              <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
              <li><Link to="/certifications" onClick={closeMenu}>Certifications</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
