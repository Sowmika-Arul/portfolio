import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education-container">
      <h2>My Education</h2>
      <ul className="education-list">
        <li className="education-item">
          <div className="education-content">
            <h3>Kongu Engineering College, Perundurai</h3>
            <p>BE - Computer Science Engineering - 8.64 CGPA</p>
          </div>
          <div className="education-year">2022 - 2026</div>
        </li>
        <li className="education-item">
          <div className="education-content">
            <h3>Vidyaa Vikas Matric Higher Secondary School</h3>
            <p>Higher Secondary Certification - 93.1%</p>
          </div>
          <div className="education-year">2021 - 2022</div>
        </li>
        <li className="education-item">
          <div className="education-content">
            <h3>Vidyaa Vikas Matric Higher Secondary School</h3>
            <p>Secondary School Leaving Certificate - 93.3%</p>
          </div>
          <div className="education-year">2019 - 2020</div>
        </li>
      </ul>
    </div>
  );
}

export default Education;
