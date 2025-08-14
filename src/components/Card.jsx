import React from 'react'
import Button from './Button'


function Training(props) {
  return (
    <div className='border-[rgba(59,2,125,1)] border-2 flex flex-col w-70 h-85 rounded-xl gap-4 py-6 px-5' >
        <img src={props.src} alt={props.name} />
        <h4 className='text-[rgba(59,2,125,1)] text-2xl font-normal'>{props.name}</h4>
        <Button  text='Give Feedback' to={props.to}/>
    </div>
  
  )
}

export default Training