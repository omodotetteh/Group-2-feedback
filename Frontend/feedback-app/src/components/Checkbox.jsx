import React from 'react'

function Checkbox(props) {
  return (
    <div className=' items-center gap-10 my-4'>
      <p className=''>{props.text}</p>
      <div className='flex items-center gap-10 my-6'> 
        <label className='flex  gap-2'>
          <span>{props.leftText}</span>
          <input type="radio" name={props.name} value="yes" className='w-8 h-8' />
        </label>

        <label className='flex items-center gap-2'>
          <input type="radio" name={props.name} value="no" className='w-8 h-8' />
          <span>{props.rightText}</span>
        </label>
      </div>  
    </div>
  )
}



export default Checkbox