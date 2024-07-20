import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <button class="but" data-text="Awesome">
    <span class="actual-text">&nbsp;sowmika&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;sowmika&nbsp;</span>
</button>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#resumee">Resume</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <button className="btn">Hire me</button>
      </ul>
    </nav>
  );
};

export default Navbar;
