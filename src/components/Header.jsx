import React from 'react'
import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1><Link to='/'>Joseph Jazwinski</Link></h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </header>
  )
}

export default Header;