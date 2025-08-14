import React from 'react'

function DropdownSeclect(props) {
  const {label, name, value, onChange, options}=props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange} 
        className='min-w-full p-3 min-h-10 justify-between rounded-xl border mb-8 cursor-pointer'
        >
        <option value="" disabled selected>-- Select an option --</option>
        {options.map((option, index) => (<option key={index} value={option} >{option}</option>))}
      </select>
    </div>
  )
}

export default DropdownSeclect

// function DropdownSeclect() {
//   return (
//     <div>
//     <label htmlFor="service" className='block'>Studio</label>
//       <select name="service" id="service" 
//       className='min-w-full p-4  min-h-12 rounded border border-gray-400 text-gray-400 mb-10 cursor-pointer'>
//         <option  value="Photography">Photography</option>
//         <option  value="Photography">Podcast</option>
//         <option  value="Photography">Videography</option>
//         <option  value="Photography">Panel Session</option>
//       </select>
//     </div>
//   )
// }

// export default DropdownSeclect;