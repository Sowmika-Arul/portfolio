import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import Home from './components/Home'; // Import the Home component
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      <div className="App">
        {loading && <Loader />} {/* Show loader if loading */}
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
