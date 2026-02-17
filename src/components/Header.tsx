import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src="public/logo_favolando.svg" alt="Favolando Logo" className="logo-img" />
        </Link>
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/archive" className={isActive('/archive')} onClick={() => setIsMenuOpen(false)}>Archivio</Link>
            </li>
            <li>
              <Link to="/upcoming" className={isActive('/upcoming')} onClick={() => setIsMenuOpen(false)}>Prossimi Spettacoli</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
