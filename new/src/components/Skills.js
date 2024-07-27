import React from 'react';
import 'boxicons/css/boxicons.min.css'; 
import { SiMysql } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import './Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
      <div className="skill-box">
        <FaHtml5 className="icon" />
        </div>
        <div className="skill-box">
        <i class='bx bxl-css3'></i>
        </div>
        <div className="skill-box">
          <i className="fab fa-bootstrap"></i>
        </div>
        <div className="skill-box">
        <i class='bx bxl-javascript'></i>
        </div>
        <div className="skill-box">
          <i className="fab fa-figma"></i>
        </div>
        <div className="skill-box">
          <i className="fab fa-react"></i>
        </div>
        <div className="skill-box">
          <i className="fab fa-node-js"></i>
        </div>
        <div className="skill-box">
          <i className='bx bxl-mongodb'></i> {/* Correct Boxicons syntax */}
        </div>
        <div className="skill-box">
        <SiMysql className="icon" />
        </div>
        <div className="skill-box">
        <SiCanva className="icon" />
        </div>
        <div className="skill-box">
        <i class='bx bxl-python'></i>
        </div>
        <div className="skill-box">
        <i class='bx bxl-java'></i>
        </div>
        <div className="skill-box">
        <FaGithub className="icon" />
        </div>
        <div className="skill-box">
        <FaGitAlt className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
