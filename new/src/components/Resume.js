import React, { useState } from 'react';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import AboutMe from './AboutMe';
import './Resume.css';

function Resume() {
  const [selectedSection, setSelectedSection] = useState('education');

  const renderSection = () => {
    switch (selectedSection) {
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'about':
        return <AboutMe />;
      default:
        return <Education />;
    }
  };

  return (
    <div className="resume">
      <div className="sidebar">
        <h1>A Quick Recap</h1>
        <p>Explore and understand better about me.</p>
        {/* Buttons with active class */}
        {/* <button className={selectedSection === 'experience' ? 'active' : ''} onClick={() => setSelectedSection('experience')}>Experience</button> */}
        <button className={selectedSection === 'education' ? 'active' : ''} onClick={() => setSelectedSection('education')}>Education</button>
        <button className={selectedSection === 'skills' ? 'active' : ''} onClick={() => setSelectedSection('skills')}>Skills</button>
        <button className={selectedSection === 'about' ? 'active' : ''} onClick={() => setSelectedSection('about')}>About me</button>
      </div>
      <div className="main-content">
        {renderSection()}
      </div>
    </div>
  );
}

export default Resume;
