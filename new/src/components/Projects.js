import React, { useState } from 'react';
import './Project.css';
import tirukkuralImage from 'C:/Users/SOWMIKA/OneDrive/Desktop/PORTFOLIO/new/src/components/Tirukkural viewer.png';
// import rescue from 'C:/Users/SOWMIKA/OneDrive/Desktop/PORTFOLIO/new/src/components/rescue.png';
import Figma from 'C:/Users/SOWMIKA/OneDrive/Desktop/PORTFOLIO/new/src/components/Figma.png';
import medical from 'C:/Users/SOWMIKA/OneDrive/Desktop/PORTFOLIO/new/src/components/medical.png';

// Example project data
const projectData = [
  {
    id: 1,
    number: '01',
    title: 'Frontend Project',
    description: 'A website which displays Kural according to the number the user entered by using third party API.',
    technologies: ['React', 'CSS Modules'],
    image: tirukkuralImage
  },
  {
    id: 2,
    number: '02',
    title: 'Figma Design',
    description: 'UI design of a jungle game.',
    technologies: ['Figma Tool'],
    image: Figma // Replace with your image paths
  },
  {
    id: 3,
    number: '03',
    title: 'Full Stack Project',
    description: 'A user friendly website which helps to reduce the time of both the patient and the doctor.',
    technologies: ['HTML', 'CSS', 'Python', 'Flask Framework'],
    image: medical // Replace with your image paths
  },
 
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleFront = () => {
    setCurrentIndex((prevIndex) => (prevIndex < projectData.length - 1 ? prevIndex + 1 : projectData.length - 1));
  };

  const project = projectData[currentIndex];

  return (
    <div className="project-container">
      <div className="project-info">
        <div className="project-number">{project.number}</div>
        <h1 className="project-title">{project.title}</h1>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.join(', ')}
        </div>
        <div className="horizontal-line"></div>
        <div className="project-buttons">
          <button className="live-project-button">Live project</button>
          <button className="github-button">GitHub</button>
        </div>
      </div>
      <div className="project-image">
        <img src={project.image} alt="projectphotos" />
      </div>
      <div className="navigation-buttons">
        <button onClick={handleBack}><i className='bx bx-chevron-left'></i></button>
        <button onClick={handleFront}><i className='bx bx-chevron-right'></i></button>
      </div>
    </div>
  );
};

export default Projects;
