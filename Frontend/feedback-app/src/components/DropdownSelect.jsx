import React from 'react'

function DropdownSelect() {
  return (
    <div>
    <label htmlFor="service" className='block'>Service</label>
      <select name="service" id="service" 
      className='min-w-full p-4  min-h-12 rounded border border-gray-400 text-gray-400 mb-10 cursor-pointer'>
        <option  value="Photography">Photography</option>
        <option  value="Photography">Podcast</option>
        <option  value="Photography">Videography</option>
        <option  value="Photography">Panel Session</option>
      </select>
    </div>
  )
}

export default DropdownSelect;