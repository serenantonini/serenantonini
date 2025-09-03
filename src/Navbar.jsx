import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <div className="line line-1">SERENA ANTONINI</div>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#hero">Home</a>
          <a href="#projects">Progetti</a>
          <a href="#contact">Contatti</a>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
