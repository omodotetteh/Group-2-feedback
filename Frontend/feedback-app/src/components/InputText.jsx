import React from 'react'

function InputText(props) {
  return (
    <div> 
      <label className='text-xl font-normal' htmlFor="typehere">{props.label}</label> 
      <input
        type={props.type}
        placeholder={props.placeholder}
        pattern={props.pattern}
        className='  min-w-full min-h-10 block rounded-xl border border-black mb-8 p-3' 
        value= {props.value}
        name= {props.name}
        onChange= {props.onChange}
      />
      </div>
  )
}

export default InputText