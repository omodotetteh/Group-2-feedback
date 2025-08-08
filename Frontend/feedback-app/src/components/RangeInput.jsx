import React from 'react'


const rangeElements = [
  
]

function RangeInput(props) {
  return (
    
    <div>
      <p> {props.text}</p>

      <div className='flex items-center justify-between mx-auto my-4 '>
        <span className="font-semibold mr-4">{props.leftText}</span>
        <input type="range" min="0" max="100" id='range' 
        className='appearance-none slider bg-[#137802] min-w-[80%] rounded-4xl h-2 outline-none cursor-pointer' />
        <span className="font-semibold ml-4">{props.rightText}</span>
        </div>
    </div>
  )
}

export default RangeInput