import React from 'react'
import { NavLink, Link } from 'react-router-dom'


function Outlinebutton(props) {
  return (
    <Link
      to={`${props.to}`}
      className="border border-[#3B027D] min-h-[60px] py-2.5 px-5 rounded-xl hover:cursor-pointer hover:bg-[#3B027D] text-[#3B027D] hover:text-white"
    >
      <div className="flex justify-between items-center font-semibold text-xl">
        <span>{props.text}</span>
        <span>&gt;</span>
      </div>
    </Link>
  );
}

export default Outlinebutton;
