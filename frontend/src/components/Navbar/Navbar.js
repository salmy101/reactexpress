import React from "react";
import './Navbar.scss';

const Navbar = () => {

  return (
    <nav className="nav">
      <div className="logo">
        <h1>Salma Ibrahim</h1>
      </div>
      <div className="main-menue">
        <ul>
          {['Home', 'About','Projects', 'Skills', 'Contact'].map((item) => (
            <li key={`linnk-${item}`}>
            <a href={`#${item}`} className="nav-item">{item}</a>
          </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;