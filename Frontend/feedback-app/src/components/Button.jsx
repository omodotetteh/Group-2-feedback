import React from 'react'

function Button({ text, className, type, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} bg-[#1B9407] p-2.5 text-xl font-semibold text-white hover:cursor-pointer hover:bg-[hsl(109,100%,32%)] rounded-xl`}
    >
      {text}
    </button>
  );
}

export default Button;


