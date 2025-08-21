import React from 'react'
import { useNavigate } from 'react-router-dom'

function Settings() {
    const navigate = useNavigate()
    const goToDashboard = () =>{
        navigate('/dashboard')
    }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className='font-bold text-5xl'>ERROR 404: Page not found</h1>
      <button className='bg-[#9747FF] hover:bg-[#8058b5] text-white font-medium py-2 px-4 transition-colors duration-200 flex items-center mt-5'
      onClick={goToDashboard}
      >
     Dashboard</button>
    </div>
  )
}

export default Settings
