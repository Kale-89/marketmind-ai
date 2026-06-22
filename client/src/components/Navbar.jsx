import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="web-name">MarketMind AI</h2>

      <div className="navbar-container">
        <NavLink className="navbar-items" to="/" end>
          Dashboard
        </NavLink>
        <NavLink className="navbar-items" to="/generator">
          Generator
        </NavLink>
        <NavLink className="navbar-items" to="/history">
          History
        </NavLink>
        <NavLink className="navbar-items" to="/knowledge">
          Knowledge Base
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
