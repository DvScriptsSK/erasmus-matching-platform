import React from 'react';
import './navbar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src='https://media.discordapp.net/attachments/845988671538331649/1126791048547532920/Logo.png' alt='logo' />
      </div>
      <div className='navbar__links'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
     </div>
    </div>
  );
};

export default NavBar;
