import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-1 fg-2">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ZERODHA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" aria-hidden="true"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/support">
                    Support
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
              </ul>
              <span className="navbar-text">
                WELCOME TO ZERODHA
              </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
//navbar imported from bootstrap, problem = not for react , need to change all class to className
//try other library for navbar and footer