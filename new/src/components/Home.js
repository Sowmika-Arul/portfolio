// src/components/Home.js

import React, { useState, useEffect } from 'react';
import { SiLeetcode } from "react-icons/si";
import image from './yellow.jpeg';
import './Home.css';
import Projects from './Projects'; // Import the Projects component

function Home() {
  const roles = ["UI Designer", "MERN Stack Developer", "Machine Learning Enthusiast", "Frontend Developer", "Backend Developer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="home-content">
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
        <div className="profile-image-wrapper">
          <img src={image} alt="Your Name" className="profile-image" />
        </div>
      </div>

      {/* Scroll to Projects Button */}
      <div className="scroll-button">
        <a href="#projects-section" className="scroll-link">Go to Projects</a>
      </div>

      {/* Projects Section */}
      <div id="projects-section" className="projects-section">
        <Projects /> {/* Render the Projects component here */}
      </div>
    </div>
  );
}

export default Home;
