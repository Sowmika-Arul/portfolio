import React from 'react';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="about">
        <h1>About Me</h1>
        <p>This is the about section.</p>
      </section>
      <section id="projects">
        <h1>Projects</h1>
        <p>This is the projects section.</p>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <p>This is the contact section.</p>
      </section>
    </div>
  );
}

export default App;
