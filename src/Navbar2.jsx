import React from "react";
import ClosedCaptionSharpIcon from "@material-ui/icons/ClosedCaptionSharp";
import { NavLink } from "react-router-dom";
const Navbar2 = () => {
  return (
    <>
      <nav className="navbar navbar-light  navbar2">
        <div className="container ">
          <a className="navbar-brand">
            <ClosedCaptionSharpIcon className="icon" />
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {/*<button className="btn btn-outline-primary" type="submit">
            
            </button>*/}
            <button className="btn btn-outline-primary" type="submit">
              Sign Up
            </button>
            <NavLink to="/sigin">
              <button className="btn btn-outline-primary w-100" type="submit">
                Sign In
              </button>
            </NavLink>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
