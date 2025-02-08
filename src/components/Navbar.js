import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {


  return (
    <div >
      <nav className={` navbar navbar-expand-lg shadow-sm bg-${props.mode}`} >
        <div className="container-fluid text-light">
          <Link className={`navbar-brand text-${props.mode ==='black'? 'white':'black'}`  } to="/"  >{props.name}</Link>
          {/* <a className={`navbar-brand text-${props.mode ==='black'? 'white':'black'}`  } href="#"  >{props.name}</a> */}
          <button
            className="navbar-toggler  bg-white"
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
                <Link className={`nav-link active text-${props.mode ==='black'? 'white':'black'} aria-current="page" `} to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link active text-${props.mode ==='black'? 'white':'black'}`} to="/about">{props.aboutSection}</Link>
              </li>
            </ul>
              <div className="form-check form-switch  mx-3" >
              <input className="form-check-input border-black" type="checkbox" id="flexSwitchCheckDefault"  onClick={props.toggleMode}/>
              <label className={`form-check-label  text-${props.mode ==='black'? 'white':'black'} `}htmlFor="flexSwitchCheckDefault">{props.darkmode}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  aboutSection: PropTypes.isRequired,
};

