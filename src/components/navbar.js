import React from 'react';
import {
  Link
} from 'react-router-dom';
import './navbar.css';

function Navbar(){
  return(
    <div className="navbar-container">
      <div className="logo-test"/>
      <ul>
        <Link to="/">
          <li/>
        </Link>
        <Link to="/dashboard">
          <li/>
        </Link>
      </ul>
      <Link to="/login">
        <div className="navbar-footer"/>
      </Link>
    </div>
  )
}

export default Navbar