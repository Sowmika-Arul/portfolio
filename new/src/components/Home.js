import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { SiLeetcode } from "react-icons/si";
import image from "./black2.jpeg";
import "./Home.css";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  const roles = React.useMemo(
    () => [
      "UI Designer",
      "MERN Stack Developer",
      "Machine Learning Enthusiast",
      "Frontend Developer",
      "Backend Developer",
    ],
    []
  );
  const [currentRole, setCurrentRole] = useState("");
  const [index, setIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (index < roles[roleIndex].length) {
      const typingTimeout = setTimeout(() => {
        setCurrentRole((prev) => prev + roles[roleIndex][index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(typingTimeout);
    } else {
      const clearTimeoutId = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIndex(0);
        setCurrentRole("");
      }, 2000);
      return () => clearTimeout(clearTimeoutId);
    }
  }, [index, roleIndex, roles]);

  return (
    <>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: { value: "black" }, 
          },
          particles: {
            number: {
              value: 25, 
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#ffcc00", "#ffaa33", "#ffee00"], 
            },
            shape: {
              type: "circle", 
            },
            opacity: {
              value: 0.8,
              random: true, // Random opacity for a glowing effect
              animation: {
                enable: true,
                speed: 1.5,
                minimumValue: 0.3, // Fade effect
                sync: false,
              },
            },
            size: {
              value: 4, // Firefly size
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5, // Pulsating effect
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 1.5, // Slow movement for a natural firefly effect
              random: true,
              direction: "none",
              outModes: {
                default: "out",
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: false, // Disable hover interaction for now
                mode: "repulse", // Fireflies will not move on hover
              },
              onClick: {
                enable: false, // Disable click interaction
                mode: "push", // Fireflies won't be added on click
              },
            },
            modes: {
              repulse: {
                distance: 100, // Repulsion distance for hover
              },
              push: {
                quantity: 3, // Number of particles added on click
              },
            },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Keeps particles in the background
        }}
      />

      <div className="home-content">
        <div className="content">
          <h2 style={{ fontWeight: "bold" }}>
            {currentRole || "\u00A0"}
          </h2>
          <h1>
            Hello, I'm <span style={{ fontWeight: "bold" }}>Sowmika Arulkumar</span>
          </h1>
          <p
            style={{
              textAlign: "justify",
              marginLeft: "-5px",
              marginRight: "auto",
              width: "95%",
              maxWidth: "650px",
            }}
          >
            Driven by a passion for technology, I aspire to create innovative solutions that not only advance progress but also foster positive change in the environment, ensuring a sustainable and harmonious future for generations to come.
          </p>

          <div className="button-group">
            <button className="button">Download Resume</button>
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
        <div className="photo" style={{ marginLeft: "-20px" }}>
          <div className="profile-image-wrapper">
            <img
              src={image}
              alt="Sowmika Arulkumar"
              className="profile-image"
            />
          </div>
        </div>
      </div>

      <div style={{ marginTop: "-70px", marginBottom: "150px" }}>
        <Resume />
      </div>
      <Projects />
      <div style={{ marginTop: "130px" }}>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;
