import React, { useState, useEffect } from "react";
import { SiLeetcode } from "react-icons/si";
import image from "./Me_white2.jpeg";
import "./Home.css";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

function Home() {
  const roles = [
    "UI Designer",
    "MERN Stack Developer",
    "Machine Learning Enthusiast",
    "Frontend Developer",
    "Backend Developer",
  ];
  const [currentRole, setCurrentRole] = useState(""); // Holds the typed role text
  const [index, setIndex] = useState(0); // Keeps track of the character index for the current role
  const [roleIndex, setRoleIndex] = useState(0); // Tracks the index of the current role in the roles array

  useEffect(() => {
    if (index < roles[roleIndex].length) {
      // Typing effect: Add the next character to the current role
      const typingTimeout = setTimeout(() => {
        setCurrentRole((prev) => prev + roles[roleIndex][index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(typingTimeout);
    } else {
      // Once the word is fully typed, clear the text after 2 seconds
      const clearTimeoutId = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length); // Move to the next role
        setIndex(0); // Reset the character index
        setCurrentRole(""); // Clear the current role text
      }, 2000);
      return () => clearTimeout(clearTimeoutId);
    }
  }, [index, roleIndex, roles]);

  return (
    <>
      <div className="home-content">
        <div className="content">
          {/* Add a min-height style to ensure a consistent height for the roles */}
          <h2 style={{ minHeight: "24px" }}>
            {currentRole || "\u00A0"} {/* Non-breaking space when empty */}
          </h2>
          <h1>
            Hello, I'm <span>Sowmika Arulkumar</span>
          </h1>
          <p>
            Aspiring to develop innovative solutions that have a meaningful
            impact on the environment.
          </p>
          <div className="button-group">
            <button className="button">Download CV</button>
            <a
              href="https://github.com/Sowmika-Arul"
              className="icon-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sowmika-arulkumar-38956b259/"
              className="icon-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://leetcode.com/u/Sowmika_1104/"
              className="icon-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
        <div className="photo">
          <div className="profile-image-wrapper">
            <img
              src={image}
              alt="Sowmika Arulkumar"
              className="profile-image"
            />
          </div>
        </div>
      </div>

      {/* Add a wrapper around the Resume component with margin styling */}
      <div style={{ marginTop: "-70px", marginBottom: "150px" }}>
        <Resume />
      </div>
      <Projects />
      <div style={{ marginTop: "130px"}}>
      <Contact />
      </div>
    </>
  );
}

export default Home;
