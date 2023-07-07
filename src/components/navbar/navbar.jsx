import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src='https://media.discordapp.net/attachments/845988671538331649/1126791048547532920/Logo.png' alt='logo' />
      </div>
      <div className='navbar__links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/auth/login' className='navbar__links-login'>Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
