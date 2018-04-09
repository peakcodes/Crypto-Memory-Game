import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" to="/">
          Memory Game!
        </a>
      </div>
      <ul className="nav navbar-nav">
        <li>
          <a>{props.prompt}</a>
        </li>
        <li>
          <a>{props.currentScore}</a>
        </li>
        <li>
          <a>{props.topScore}</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;