import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setLoading }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 2000); // Simulate loading time
  };

  return (
    <nav className="navbar">
      <button className="but" data-text="Awesome">
        <span className="actual-text">&nbsp;sowmika&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;sowmika&nbsp;</span>
      </button>
      <ul className="navbar-links">
        <li><button onClick={() => handleNavigation('/')} className='new'>Home</button></li>
        <li><button onClick={() => handleNavigation('/resume')} className='new'>Resume</button></li>
        <li><button onClick={() => handleNavigation('/projects')} className='new'>Projects</button></li>
        <li><button onClick={() => handleNavigation('/contact')} className='new'>Contact</button></li>
        <button className="btn">Hire me</button>
      </ul>
    </nav>
  );
};

export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <button className="but" data-text="Awesome">
//         <span className="actual-text">&nbsp;sowmika&nbsp;</span>
//         <span aria-hidden="true" className="hover-text">&nbsp;sowmika&nbsp;</span>
//       </button>
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/resume">Resume</Link></li>
//         <li><Link to="/projects">Projects</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <button className="btn">Hire me</button>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;