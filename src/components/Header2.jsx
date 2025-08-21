import React from 'react'

function Header2() {
  return (
    <div>
      <div className="lg:hidden flex justify-between items-center mb-4 bg-black">
          <button 
            className="text-white"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h2 className='text-left text-white'>Hello Admin</h2>

        </div>  
    </div>
  )
}

export default Header2
