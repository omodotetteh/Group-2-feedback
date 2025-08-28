import React from 'react'
import Logo from '../assets/Netizens_logo.png'
import Button from './Button';


function Header() {
  return (
    <header className="w-full h-[92px] bg-[#33026C]  flex justify-between items-center px-20">
      <img src={Logo} alt="Netisens logo" />
      <Button text="Contact us" />
    </header>
  );
}

export default Header;


