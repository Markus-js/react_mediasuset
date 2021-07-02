import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Logo
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              FORSIDE
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/events"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              EVENTS
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/eventslist"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              CAMPS
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/events"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              BILLETTER
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/praktisk-info"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              PRAKTISK INFO
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
