import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
// Adjust the path accordingly

function App() {
  return (
    <div className="App">
      <Navbar />
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
            <a href="https://github.com/yourusername" className="icon-button" target="_blank" rel="noopener noreferrer">
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
    </div>
  );
}

export default App;
