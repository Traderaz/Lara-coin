import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        WCKD
      </Link>
      
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-item">HOME</Link>
        <Link to="/tokenomics" className="nav-item">TOKENOMICS</Link>
        <Link to="/how-to-buy" className="nav-item">BUY</Link>
        <Link to="/roadmap" className="nav-item">ROADMAP</Link>
      </div>

      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar; 