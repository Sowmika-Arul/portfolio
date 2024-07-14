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
         <pre>Hello, I'm 
         Sowmika</pre>
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
