import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/Netizens_logo.png' 
import Phone from '../assets/phone.png'
import Email from '../assets/email.png'
import Location from '../assets/location.png'
import Twitter from '../assets/twitter.png'
import Youtube from '../assets/youtubelogo.png'
import Facebook from '../assets/facebooklogo.png'
import Insta from '../assets/insta.png'




function Footer() {
  const year = new Date().getFullYear();
  return (
    
    <footer className='flex flex-col justify-around text-white bg-gradient-to-r from-[#137802] to-[#23024A] w-screen max-w-full  h-[280px] mt-20'>
      <div className='flex justify-around items-center rounded-3xl mt-5 max-w-screen h-[270px]'>
          
          <a href="#top">
            <img className='  w-[314px] h-auto' src={Logo} alt="Netisens logo" />
          </a>
          
          <div className='flex flex-col justify-between  w-[359px] h-[152px]'>

              <div className='flex'>
                <img src={Location} alt="" />
                <p className='text-xl font-medium'>133, Atiku Abubakar road, Uyo.</p>
              </div>

              <div className='flex'>
                <img src={Email} alt="" />
                <p className='text-xl font-medium'>info@netisens.com</p>
              </div>

              <div className='flex'>
                <img src={Phone} alt="" />
                <p className='text-xl font-medium'>+234 911 6875415</p>
              </div>

              
          </div>
          <div className='flex justify-between w-[345px] h-[32px]'>
            <img src={Youtube} alt="" />
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" className='rounded-[50%]'/>
            <img src={Insta} alt="" className='rounded-[50%]'/>
            <p className='text-xl font-semibold'>Netisens ICT</p>
          </div>
      </div><hr />
      <div className='flex flex-col justify-center items-center max-w-full h-[50px]'>
        
        
            <p className='text-l font-medium'>Admin?{""} <Link to="/adminlogin" className='text-l font-medium hover:underline'>Sign In Here</Link> </p>
        

        <p className='text-[16px] font-medium'>Copyright &copy; {year} Netisens ICT. All rights reserved</p>
      </div>
    </footer>
    
            
  )
}

export default Footer