import React from 'react'
import InfoGraphic from '../assets/infographics.png'

function Article() {
  return (
    <div className="flex flex-wrap items-center justify-between mt-10 px-20">
      
      <div className="max-w-[668px] mt-20">
        <h1 className="text-5xl font-bold text-[#33026C]">
          AT NETIZENS ICT <br /> WE VALUE YOUR FEEDBACK
        </h1>
        <p className="text-2xl mt-6 max-w-[550px] font-normal">
          Tell us how satisfied you are with our services and how we can serve you better
        </p>
      </div>

      <div className="mt-10 flex-1 max-w-xl pl-20">
        <img src={InfoGraphic} alt="info graphics" />
      </div>

    </div>
  );
}

export default Article;



// function Article() {
//   return (
//     <div className='flex flex-wrap items-center justify-between mt-10 mx-20' >
    
//         <div className=' w-[668px] h-52 mt-20 '>
//           <h1 className='text-5xl font-bold text-[#33026C] '>AT NETIZENS ICT <br/> WE VALUE YOUR FEEDBACK</h1>
//           <p className='text-2xl mt-6 max-w-[550px] font-normal'>Tell us how satisified you are with our services and how can we serve you better</p>
//         </div>
       
//         <div className='ml-20 max-w-xl mt-10 md:mt-0 flex-1'>
//           <img src={InfoGraphic} alt="info graohics"/>
//         </div>  
        
//     </div>
//   )
// }

// export default Article