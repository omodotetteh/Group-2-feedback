import React from 'react'

function Radio(props) {
  const {name, leftText,rightText, label, onChange,value} = props;
  return (
    <div className=' items-center gap-10 my-4'>
      <p className='text-xl font-normal'>{label}</p>
      <div className='flex items-center gap-10 my-6'> 
        <label className='flex  gap-2'>
          <span className="font-semibold">{leftText}</span>
          <input
           type="radio" 
           name={name} 
           value="yes" 
           className='w-8 h-8' 
           checked={value === "yes"} 
           onChange={onChange} 
          />
        </label>

        <label className='flex items-center gap-2'>
          <input
           type="radio" 
           name={name} 
           value="no" 
           className='w-8 h-8' 
           checked={value === "no"} 
           onChange={onChange} 
          />
          <span className="font-semibold">{rightText}</span>
        </label>
      </div>  
    </div>
  )
}



export default Radio