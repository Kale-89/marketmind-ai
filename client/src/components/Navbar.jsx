import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h2 className="web-name">MarketMind AI</h2>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div className={`navbar-container ${menuOpen ? "open" : ""}`}>
        <NavLink
          className="navbar-items"
          to="/"
          end
          onClick={() => setMenuOpen(false)}
        >
          Dashboard
        </NavLink>

        <NavLink
          className="navbar-items"
          to="/generator"
          onClick={() => setMenuOpen(false)}
        >
          Generator
        </NavLink>

        <NavLink
          className="navbar-items"
          to="/history"
          onClick={() => setMenuOpen(false)}
        >
          History
        </NavLink>

        <NavLink
          className="navbar-items"
          to="/knowledge"
          onClick={() => setMenuOpen(false)}
        >
          Knowledge Base
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
