// AboutMe.js
import React from 'react';
import './AboutMe.css'; // Import the CSS file

function AboutMe() {
  return (
    <div className="about-me-container">
      <h2>About Me</h2>
      <div className="about-me-content">
        <div className="about-me-column">
          <div className="about-me-box">
            <p><strong>Name:</strong> Sowmika Arulkumar</p>
          </div>
          <div className="about-me-box">
            <p><strong>Date of Birth:</strong> April 11, 2005</p>
          </div>
          <div className="about-me-box">
            <p><strong>Age:</strong> 19</p>
          </div>
          <div className="about-me-box">
            <p><strong>Nationality:</strong> Indian</p>
          </div>
        </div>
        <div className="about-me-column">
          <div className="about-me-box">
            <p><strong>Address:</strong> Tiruchengode</p>
          </div>
          <div className="about-me-box">
            <p><strong>Phone:</strong> +91 9345847062</p>
          </div>
          <div className="about-me-box">
            <p><strong>Email:</strong> sowmikaarulkumar@gmail.com</p>
          </div>
          <div className="about-me-box">
            <p><strong>Language:</strong> Tamil, English</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
