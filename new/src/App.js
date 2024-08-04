import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import image from './components/yellow.jpeg';
import pattern from './components/pattern.png';
import { SiLeetcode } from "react-icons/si";
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const roles = ["UI Designer", "MERN Stack Developer", "Machine Learning Enthusiast", "Frontend Developer", "Backend Developer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="App">
      {loading && <Loader />} {/* Show loader if loading */}
      <Navbar setLoading={setLoading} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-content">
              <div className="content">
                <h2>{roles[currentRole]}</h2>
                <h1>Hello, I'm <span>Sowmika Arulkumar</span></h1>
                <p>Aiming to create an impactful solution to the environment which betters the lives of the people.</p>
                <div className="button-group">
                  <button className="button">Download CV</button>
                  <a href="https://github.com/Sowmika-Arul" className="icon-button" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/sowmika-arulkumar-38956b259/" className="icon-button" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://leetcode.com/u/Sowmika_1104/" className="icon-button" target="_blank" rel="noopener noreferrer">
                  <SiLeetcode />
                  </a>
                </div>
              </div>
              <div className="photo">
              <img src={pattern} alt="Pattern" className="pattern-image" />
              <img src={pattern} alt="Pattern" className="pattern-img" />
                <div className="profile-image-wrapper">
                  <img src={image} alt="Your Name" className="profile-image" />
                </div>
              </div>
            </div>
          }
        />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
