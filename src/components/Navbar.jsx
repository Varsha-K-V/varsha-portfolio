import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Varsha K V</h2>
        {/* Desktop Nav */}
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="mobile-menu">
            <li onClick={() => setMenuOpen(false)}>Home</li>
            <li onClick={() => setMenuOpen(false)}>Skills</li>
            <li onClick={() => setMenuOpen(false)}>Projects</li>
            <li onClick={() => setMenuOpen(false)}>Contact</li>
        </ul>
        )}
    </nav>
  );
}

export default Navbar;
