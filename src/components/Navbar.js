import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


export default function Navbar(props) {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  console.log("current user",user)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {isAuthenticated && (
            <li className="nav-item">
              <span className="navbar-text">
                {user.name}
              </span>
            </li>
          )}
          {isAuthenticated ? (
            <li className="nav-item">
              <button className="btn btn-outline-light" onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
            </li>
          ) : (
            <li className="nav-item">
              <button className="btn btn-outline-light" onClick={() => loginWithRedirect()}>Login</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string
};

