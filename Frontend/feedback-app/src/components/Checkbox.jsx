import React from 'react'

function Checkbox() {
  return (
    <div className=' items-center gap-10 my-4'>
        <div className='flex items-center gap-10 my-6'> 
        <label className='flex items-center gap-2'>Yes
            <input type="checkbox" name="yes" value="yes" className='w-8 h-8' />
        </label>
        <label className='flex items-center gap-2'>No
            <input type="checkbox" name="no" value="no" className='w-8 h-8' />
        </label>

        </div>

      
    </div>
  )
}

export default Checkbox