import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Button(props) {
  return (
    <Link to={`/${props.to}`}
        className='border h-[60px] border-[rgba(59,2,125,1)] py-2.5 px-5 rounded-xl hover:cursor-pointer hover:bg-[rgba(59,2,125,1)] text-[rgba(59,2,125,1)] hover:text-white '>
        <div className='flex justify-between font-semibold text-xl '>
            <span>{props.text}</span>
            {/* <span>&gt;</span> */}
        </div>
       
    </Link>
  )
}

export default Button