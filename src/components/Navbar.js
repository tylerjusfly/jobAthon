import React from 'react';
import '../assets/navbar.css';

export const Navbar = () => {
  return (
    <div className="Navbar">
      <h2 className="Nav-logo">JobAthon</h2>
      <ul className="Nav-List">
        <li>Browse startups</li>
        <li>Find jobs</li>
      </ul>
    </div>
  );
};
