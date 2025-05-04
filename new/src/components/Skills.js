import React from 'react';
import 'boxicons/css/boxicons.min.css'; 
import { SiMysql, SiCanva } from "react-icons/si"; 
import { FaGithub, FaGitAlt, FaHtml5 } from "react-icons/fa";
import './Skills.css';

function Skills() {
  return (
    <div className="skills-section">
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <FaHtml5 className="skill-icon" />
            <div className="skill-name">HTML5</div>
          </div>
          <div className="skill-card">
            <i className="bx bxl-css3 skill-icon"></i>
            <div className="skill-name">CSS3</div>
          </div>
          <div className="skill-card">
            <i className="fab fa-bootstrap skill-icon"></i>
            <div className="skill-name">Bootstrap</div>
          </div>
          <div className="skill-card">
            <i className="bx bxl-javascript skill-icon"></i>
            <div className="skill-name">JavaScript</div>
          </div>
          <div className="skill-card">
            <i className="fab fa-figma skill-icon"></i>
            <div className="skill-name">Figma</div>
          </div>
          <div className="skill-card">
            <i className="fab fa-react skill-icon"></i>
            <div className="skill-name">React</div>
          </div>
          <div className="skill-card">
            <i className="fab fa-node-js skill-icon"></i>
            <div className="skill-name">Node.js</div>
          </div>
          <div className="skill-card">
            <i className="bx bxl-mongodb skill-icon"></i>
            <div className="skill-name">MongoDB</div>
          </div>
          <div className="skill-card">
            <SiMysql className="skill-icon" />
            <div className="skill-name">MySQL</div>
          </div>
          <div className="skill-card">
            <SiCanva className="skill-icon" />
            <div className="skill-name">Canva</div>
          </div>
          <div className="skill-card">
            <i className="bx bxl-python skill-icon"></i>
            <div className="skill-name">Python</div>
          </div>
          <div className="skill-card">
            <i className="bx bxl-java skill-icon"></i>
            <div className="skill-name">Java</div>
          </div>
          <div className="skill-card">
            <FaGithub className="skill-icon" />
            <div className="skill-name">GitHub</div>
          </div>
          <div className="skill-card">
            <FaGitAlt className="skill-icon" />
            <div className="skill-name">Git</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
