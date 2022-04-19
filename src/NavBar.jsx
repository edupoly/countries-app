import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navOne">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Countries" className="nav-link" href="#">
                  Countries
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
