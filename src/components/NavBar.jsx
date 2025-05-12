import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/courses">Cours</a>
        </li>
        <li>
          <a href="/about">À propos</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;