import React from 'react'

function DropdownSeclect(props) {
  const {label, name, value, onChange, options}=props;
  return (
    <div>
      <label className='text-xl font-normal' htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange} 
        className='min-w-full p-3 min-h-10 justify-between rounded-xl border mb-8 cursor-pointer'
        >
        <option value="" disabled>-- Select an option --</option>
        {options.map((option, index) => (<option key={index} value={option} >{option}</option>))}
      </select>
    </div>
  )
}

export default DropdownSeclect

