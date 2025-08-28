import React from 'react'
import Outlinebutton from './Outlinebutton'

function Feedbackcard(props) {
  return (
    <div className='border-[#33026C] border-2 flex flex-col w-[387px] h-[435px] rounded-xl gap-6 py-6 px-5' >
        <img src={props.src} alt={props.name} />
        <h4 className='text-[#3b027d] text-2xl font-normal'>{props.name}</h4>
        <Outlinebutton text='Give Feedback' textt='&gt;' to={props.to}/>

    </div>
  );
}

export default Feedbackcard;

