import React from 'react';
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className='navbar'>
        <Link className='navbarBox' to="/"></Link>
        <Link className='navbarBox' to="/">Unscramble It !</Link>
        <Link className='navbarBox' id="aboutBox" to="/about">About</Link>
    </div>
  );
}

export default NavBar;
