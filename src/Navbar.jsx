import React from "react";
//import SearchIcon from "@material-ui/icons/Search";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            🖤 Noval Personal Mantras
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item ">
                <div className="dropdown">
                  <NavLink
                    className="nav-link active dropdown"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-current="page"
                    to="/products"
                  >
                    Products
                  </NavLink>
                  <ul
                    className="dropdown-menu shadow p-3 mb-5 bg-body rounded"
                    aria-labelledby="dropdownMenu2"
                  >
                    <li>
                      <button className="dropdown-item" type="button">
                        <NavLink to="/pro">Pro</NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Teams
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pricing">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/documentation">
                  Documentation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/" aria-disabled="true">
                  Community
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
