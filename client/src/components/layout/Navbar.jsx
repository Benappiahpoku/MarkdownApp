import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`navbar ${isActive ? "active" : ""}`}>
          <NavLink to="/" className="logo" onClick={removeActive}>
            Markdown App
          </NavLink>
          <ul className={`navMenu ${isActive ? "active" : ""}`}>
            <li>
              <NavLink to="/" className="navLink" onClick={removeActive}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/create" className="navLink" onClick={removeActive}>
                Create Note
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/note/:id"
                className="navLink"
                onClick={removeActive}
              >
                View Note
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/edit/:id"
                className="navLink"
                onClick={removeActive}
              >
                Edit Note
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/check/:id"
                className="navLink"
                onClick={removeActive}
              >
                Check Grammar
              </NavLink>
            </li>
          </ul>
          <div
            className={`hamburger ${isActive ? "active" : ""}`}
            onClick={toggleActiveClass}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
