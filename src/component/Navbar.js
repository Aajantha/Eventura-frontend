

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './styles.css'; // Ensure this path is correct
// import logo from '/home/uki/Downloads/event aaa/event aa/event/frontend/src/component/EVENTURA.png'; // Updated to the correct path within src folder

// const NavBar = () => (
//   <nav className="navbar">
//     <img src={logo} alt="Eventura" className="logo" />
//     <ul className="navbar-menu">
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/aboutUs">About Us</Link></li>
//       <li><Link to="/events">Events</Link></li>
//       <li><Link to="/services">Event Services</Link></li>
//       <li><Link to="/signin">Sign In</Link></li>
//       <li><Link to="/signup">Sign Up</Link></li>
//     </ul>
//   </nav>
// );

// export default NavBar;


import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Ensure this path is correct
import logo from '/home/uki/Downloads/event aaa/event aa/event/frontend/src/component/EVENTURA.png'; // Use a relative path within src/assets

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <img src={logo} alt="Eventura" className="logo" />
    </div>
    <ul className="navbar-menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/aboutUs">About Us</Link></li>
      <li><Link to="/events">Events</Link></li>
      <li><Link to="/services">Event Services</Link></li>
      <li><Link to="/signin">Sign In</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
    </ul>
  </nav>
);

export default NavBar;
