import React, { useState } from 'react';
import './Project.css';
import Book from './book.png';
// import rescue from 'C:/Users/SOWMIKA/OneDrive/Desktop/PORTFOLIO/new/src/components/rescue.png';
import Alumni from './alumni.png';
import medical from './medical.png';


const projectData = [
  {
    id: 1,
    number: '01',
    title: 'Book Recommendation Website',
    description: 'A book recommendation website helps users discover new books based on their preferences,and genres of interest. It offers personalized suggestions, reviews, and ratings to enhance the reading experience and assist in finding the perfect book.',
    technologies: ['React', 'Node js', 'Mongo', 'Express'],
    image: Book,
    githubLink: 'https://github.com/Sowmika-Arul/Book_Recommendation' 
  },
 
  {
    id: 2,
    number: '02',
    title: 'Medi Connect',
    description: 'A Hospital Management system focuses on the efficient administration of healthcare services, including managing patient information, hospital resources, and staff. It ensures smooth operations by organizing medical records, facilitating inventory management, and supporting various hospital departments for optimal service delivery.',
    technologies: ['HTML', 'CSS', 'Python', 'Flask Framework'],
    image: medical, 
    githubLink: 'https://github.com/Sowmika-Arul/Medical-Management' 
  },

  {
    id: 3,
    number: '03',
    title: 'Alumni Linkup',
    description: 'The Alumni Connect website fosters meaningful relationships by helping alumni from various fields interact, support each other, and contribute to the growth of the community. A platform that enables former students to network, collaborate, and stay connected with their alma mater, while sharing insights, career opportunities, and mentorship.',
    technologies: ['React', 'Node js', 'Mongo', 'Express'],
    image: Alumni, 
    githubLink: 'https://github.com/Sowmika-Arul/Alumni_Connect' 
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
    <div className="project-container" style={{marginTop: '50px'}}>
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
