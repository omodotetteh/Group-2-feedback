import React from 'react'

function InputText(props) {
  return (
    <div> 
      <label htmlFor="typehere">{props.label}</label> 
      <input
      type={props.type}
      placeholder={props.placeholder}
      id='typehere'
      className=' my-2 min-w-full min-h-10 block rounded border border-black mb-8 pl-2' 
      value= {props.value}
      name= {props.name}
      onChange= {props.onChange}
      />
      </div>
  )
}

export default InputText