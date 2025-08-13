import React from 'react'

export default function RadioButtons(props) {
    const {name, options, className, text, value, onChange, selectedValue} = props;
  return (
    <div className=' items-center gap-10 my-4'>
      <p className='text-xl font-normal'>{text}</p>
      <div className={`${className} flex items justify-between gap-10 my-6`}> 
        {options.map((option, index) =>(
          <label key={index} className='flex items-center gap-2'>
          <input 
          className='w-8 h-8'
          type="radio" 
          name={name} 
          value={option}
          checked={selectedValue===option} 
          onChange={(e)=>onChange(e.target.value)}
          />
          {option}
        </label> 
        ))}
        
      </div>  
    </div>
  )
}
