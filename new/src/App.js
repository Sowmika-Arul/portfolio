import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Projects from './components/Projects';  
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="main-content">
              <div className="content">
                <h2>Software Developer</h2>
                <h1>Hello, I'm <span>Sowmika Arulkumar</span></h1>
                <p>I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
                <div className="button-group">
                  <button className="button">Download CV</button>
                  <a href="https://github.com/yourusername" className="icon-button" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/yourusername" className="icon-button" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.hackerrank.com/yourusername" className="icon-button" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-hackerrank"></i>
                  </a>
                </div>
              </div>
              <div className="photo">
                <div className="profile-image-wrapper">
                  <img src="your-photo-url.jpg" alt="Your Name" className="profile-image" />
                </div>
              </div>
            </div>
          } />
          <Route path="/resume" element={<Resume />} />
          <Route path = "/projects" element ={<Projects/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
