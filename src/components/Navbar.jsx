import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {

  let activeStyle = {
    fontSize : '17px',
    borderBottom : '2px solid rgb(5, 121, 203)'
  }
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      id="nav"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/" style={({isActive})=>isActive ? activeStyle : undefined}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" style={({isActive})=>isActive ? activeStyle : undefined}>
                About Us
              </NavLink>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">
              {`${props.mode === 'light' ? "Enable" : "Disable"} Dark Mode`}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//Here we are declaring the propstypes Means the sended props must be this
Navbar.propTypes = {
  // title:PropTypes.string,
  //If we want a prop to be must required then we do this
  title: PropTypes.string.isRequired,
};

//We can also set default props
Navbar.defaultProps = {
  title: "Set title Here",
};
