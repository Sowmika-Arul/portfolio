import React, { useState } from 'react';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import AboutMe from './AboutMe';
import './Resume.css'; // Create and import your styles

function Resume() {
  const [selectedSection, setSelectedSection] = useState('experience');

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
        return <Experience />;
    }
  };

  return (
    <div className="resume">
      <div className="sidebar">
        <h1>A Quick Recap</h1>
        <p>Explore and understand better about me.</p>
        <button onClick={() => setSelectedSection('experience')}>Experience</button>
        <button onClick={() => setSelectedSection('education')}>Education</button>
        <button onClick={() => setSelectedSection('skills')}>Skills</button>
        <button onClick={() => setSelectedSection('about')}>About me</button>
      </div>
      <div className="main-content">
        {renderSection()}
      </div>
    </div>
  );
}

export default Resume;
