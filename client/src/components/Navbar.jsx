import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>MarketMind AI</h2>

      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/generator">Generator</Link>
        <Link to="/history">History</Link>
        <Link to="/knowledge">Knowledge Base</Link>
      </div>
    </nav>
  );
}

export default Navbar;
