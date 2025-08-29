import React from 'react'
import Logo from '../assets/Netizens_logo.png'
import Button from './Button';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header id='top' className="w-full h-[92px] bg-[#33026C]  flex justify-between items-center px-20">
      <img src={Logo} alt="Netisens logo" />
      <Link to="/contactus">
        <Button text="Contact us" />
      </Link>
    </header>
  );
}

export default Header;


