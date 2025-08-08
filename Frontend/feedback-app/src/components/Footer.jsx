import React from 'react'
import Logo from '../assets/logo.png' 
import Call from '../assets/call.png'
import Email from '../assets/email.png'
import Location from '../assets/location.png'
import Twitter from '../assets/X.png'
import Youtube from '../assets/youtube.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[rgba(19,120,2,1)] to-[rgba(35,2,74,1)]  mt-10 h-60 ">
      <div className='flex justify-around items-center rounded-3xl mt-5 max-w-screen h-50'>
          <img className='w-50' src={Logo} alt="logo" />
          <div className='flex flex-col justify-between  w-100 h-30 ml-50'>
              <div className='flex'>
                <img src={Location} alt="location" />
                <p className='text-xl font-medium'>133, Atiku Abubakar road, Uyo.</p>
              </div>
              <div className='flex'>
                <img src={Email} alt="email" />
                <p className='text-xl font-medium'>info@netisens.com</p>
              </div>
              <div className='flex'>
                <img src={Call} alt="call" />
                <p className='text-xl font-medium'>+234 911 6875415</p>
              </div>
          </div>
          <div className='flex justify-between w-80 h-[32px]'>
            <img src={Youtube} alt="youtube" />
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="X" className='rounded-[50%]'/>
            <img src={Instagram} alt="instagram" className='rounded-[50%]'/>
            <p className='text-xl font-semibold'>Netisens ICT</p>
          </div>
      </div><hr />
      <div className='flex justify-center items-center max-w-full h-10'>
        <p className='text-[16px] font-medium'>Copyright &copy; 2025 Netisens ICT. All rights reserved</p>
      </div>
    </footer>

  )
}

export default Footer