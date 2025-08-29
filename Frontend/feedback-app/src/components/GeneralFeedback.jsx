import React from 'react'
import InputText from './InputText'
import Button from './Button';
import { useState } from 'react';


function GeneralFeedback() {
   const initialFormData= {
          name: "",
          email: "",
          general_feedback: "",
          
        };
      
        const [formData, setFormData] = useState(initialFormData);
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({ ...prev, [name]: value }));
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("General Feedback:", formData);
          setFormData(initialFormData);
        };

  return (
    <div className="flex flex-col items-center mt-20 px-6 py-10 gap-10 border-2 border-[#33026C] rounded-xl w-[75%] max-w-7xl mx-auto">
      
      <div className="max-w-[567px] gap-3 text-center">
        <h3 className="text-[40px] font-medium">General Feedback</h3>
        <legend className="text-2xl font-normal">
          Let us know how your overall experience has been
        </legend>
      </div>

      {/* <div className='w-[1189px] p-10 gap-12'> */}
        <div className='w-full max-w-4xl p-10 gap-12'>

        <form  
        className=' m-auto min-w-full  ' 
        onSubmit={handleSubmit}
        >

        <InputText
          label='Name' 
          type='text' 
          placeholder='Jane Doe' 
          name='name' 
          value={formData.name} 
          onChange={handleChange}
        />

        <InputText 
          label='Email' 
          type='email' 
          placeholder='janedoe@gmail.com' 
          name='email' 
          value={formData.email} 
          onChange={handleChange}
        />
            
        <label htmlFor="feedback" className='text-xl font-normal'>Your Feedback</label>
            <textarea 
            id="general_feedback" 
            placeholder='Type here' 
            className=' min-w-full min-h-30 block m-auto rounded-xl border border-black p-5' 
            name='general_feedback' 
            value={formData.general_feedback} 
            onChange={handleChange}
            ></textarea>
            
            <div className='flex justify-center mt-6'>
              <Button 
              className="bg-[#3B027D] w-72"
              type="submit" 
              text="Submit"
              />
            </div>
            
        </form>
      </div>

    </div>
  );

}
export default GeneralFeedback;



// function GeneralFeedback() {
//   return (
//     <div className='flex flex-col items-center mt-20 m-auto w-8/9 border-[#33026C] rounded-xl min-h-full   px-6 py-10 gap-10 border-2'> 
//       <div className='w-[567px] h-[87px] gap-3'>
//         <h3 className='text-center text-[40px] font-medium' >General Feedback</h3>
//         <p className='text-center text-2xl font-normal'>Let us know how your overall experience have been</p>
//       </div>

//       <div className='w-[1189px] p-10 gap-12'>
//         <form action="#" className=' m-auto min-w-full  ' >
//             <label htmlFor="fullName" className='block text-2xl font-normal'>Name</label> 
//             <input type="text " placeholder='Jane Doe' id='fullName' className='min-w-full min-h-10 block m-auto rounded-xl border border-black mb-8 pl-3' />

//             <label htmlFor="email" className='block text-2xl font-normal'>Email</label>
//             <input type="email" placeholder='janedoe@gmail.com' id='email'className='min-w-full min-h-10 block m-auto rounded-xl border border-black mb-8 pl-3' />
            
//             <label htmlFor="feedback" className='block text-2xl font-normal'>Your Feedback</label>
//             <textarea name="feedback" id="feedback" placeholder='Type here' className='min-w-full min-h-30 block m-auto rounded-xl border border-black p-5'></textarea>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default GeneralFeedback