import React from 'react'
import Teacher from "../assets/baner-pic.png"

function Midsection() {
  return (
    <div className="flex bg-[#33026C]  text-white justify-between items-start mt-20 py-11 px-16 w-screen max-w-full">
      
      <div className="max-w-[573px] flex flex-col items-start justify-between gap-6 ">
        <h3 className="text-[40px] font-semibold w-full">Innovate. Connect. Transform</h3>
        <p className="text-4xl font-medium leading-relaxed max-w-[437px]">
          Your Tech Future with Netisens ICT
        </p>
        <a href="https://netisens.com" target='_blank' rel='noopener noreferer'>
          <button className="bg-[#1B9407] h-[76px] max-w-[359px] p-2.5 gap-2.5 text-xl font-semibold text-white hover:cursor-pointer hover:bg-[hsl(109,100%,32%)] rounded-xl">
          Visit our website to learn more
        </button>
        </a>
      </div>

      <img src={Teacher} alt="netizens class tutor" className="rounded my-10" />

    </div>
  );
}

export default Midsection;



// function Midsection() {
//   return (
//     <div className='flex bg-[#33026C] w-screen max-w-full overflow-x-hidden text-white justify-between items-start mt-20 py-8' >
//         <div className='h-[294px] w-[573px] my-11 ml-14 flex flex-col items-start justify-between' >
//             <h3 className="text-[40px] font-semibold text-white mb-2 w-full">Innovate. Connect. Transform</h3>
//             <p className="text-4xl font-medium text-white-700 leading-relaxed  w-[437px]">Your Tech Future with Netisens ICT</p>
//             <button className="bg-[#1B9407] h-[76px] w-[359px] p-2.5 gap-2.5 text-xl font-semibold text-white hover:cursor-pointer hover:bg-[hsl(109,100%,32%)] rounded-xl  ">Visit our website to learn more</button>
//         </div>
//         <img src={Teacher} alt="netizens class tutor" className='rounded my-10 mr-14'   />
//     </div>
//   )
// }

// export default Midsection