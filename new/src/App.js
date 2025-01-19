import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import Home from './components/Home'; // Import the Home component
import Particles from 'react-tsparticles'; // Import Particles component
import { loadFireflyPreset } from 'tsparticles-preset-firefly'; // Import preset for animation
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  const particlesInit = async (engine) => {
    console.log("Initializing particles...");
    try {
      await loadFireflyPreset(engine); // Load the firefly preset
      console.log("Firefly preset loaded successfully.");
    } catch (error) {
      console.error("Error loading firefly preset:", error);
    }
  };

  return (
    <Router>
      <div className="App">
        {loading && <Loader />} {/* Show loader if loading */}
        
        {/* Firefly effect using tsParticles */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            preset: "firefly",
            background: {
              color: { value: "#000000" }, // Set the background color to black
            },
            particles: {
              color: { value: "#ffcc00" }, // Bright yellow for visibility
              size: {
                value: 5, // Larger particle size
              },
            },
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1, // Make sure particles are in the background
          }}
        />

        <Navbar setLoading={setLoading} />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use Home component for the "/" route */}
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
