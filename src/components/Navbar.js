import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
  <nav className="nav">
    <Link to="/" classname="site-title">myCalories</Link>
    <ul>
        <Link to="About">About</Link>
        <Link to="/Login">Login</Link>
    </ul>
  </nav>
  )
};

export default Navbar;