import React from 'react';
//import userimage from '../assets/userimage.png';

const navbar = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="/"><i className="fas fa-bars" /></a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <button className="nav-link btn btn-link" data-toggle="dropdown">
            <img src={require('../../assets/userimage.png')}  alt="User Avatar" className="img-circle mr-3" width="30" />
          </button>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-header text-muted">Name</span>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item">
              <span className="dropdown-item dropdown-header">Sign Out</span>
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;