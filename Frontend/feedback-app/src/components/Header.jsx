import React from 'react'
import logo from '../assets/Logo.png'

function Header() {
  return (
    <header className="bg-[rgba(51,2,108,1)]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <img src={logo} alt="Logo" className='w-28' />
        <nav className="space-x-6">
        <button className="bg-[rgba(27,148,7,1)] text-white px-7 py-3 rounded-2xl hover:bg-green-700 transition">Contact Us</button>
        </nav>
      </div>
    </header>

  )
}

export default Header
