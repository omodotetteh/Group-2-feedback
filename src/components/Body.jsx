import React from 'react'
import first from '../assets/firstpic.png'
import second from '../assets/secondpic.jpg'

function Body() {
  return (
   <section className="bg-white py-20 px-10">
      {/* at netisens */}
     <div className=" mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
       <div className="md:w-1/2 mt-10 md:-mt-10">
         <h1 className="text-4xl font-bold text-[rgba(59,2,125,1)] mb-2"> AT NETISENS ICT</h1>
         <h1 className="text-4xl font-bold text-[rgba(59,2,125,1)] mb-2">WE VALUE YOUR FEEDBACK</h1>
         <p className="text-black font-rubik mb-6 md:mt-7">Tell us how to satisfied you are with our services and<br/> how we can serve you better</p>
       </div>
       <div className="md:w-1/2 mt-10 md:mt-0">
         <img src={first} alt="firstpic" className='-mt-20 w-100 ml-50'  />
       </div>
     </div>

     {/* general form */}
     <div className='border-[rgba(59,2,125,1)] border-1 rounded-2xl p-2 mt-10 text-center'> 
       <h1 className='text-2xl font-semibold mt-5'>General Feedback</h1>
       <p>Let us know what your overall experience has been</p>
       <div>
         <h1 className='text-justify mt-10 ml-10.5'>Name</h1>
         <input type="text" placeholder='Jane Doe' className="w-270 px-4 py-2 border border-[rgba(59,2,125,1)] rounded-lg mt-1 " />
         <h1 className='text-justify mt-5 ml-10.5'>Email</h1>
         <input type="text" placeholder='janedoe@gmail.com' className="w-270 px-4 py-2 border border-[rgba(59,2,125,1)] rounded-lg mt-1" />
         <h1 className='text-justify mt-5 ml-10.5'>Your Feedback</h1>
         <input type="text" placeholder='Type here' className="w-270 px-4 py-2 border border-[rgba(59,2,125,1)] rounded-lg mt-1 h-60 mb-14" />
       </div>
     </div>

     {/* Blue div */}
     <div className=" -mx-10 px-6 flex flex-col md:flex-row items-center justify-between bg-[rgba(59,2,125,1)] mt-20 h-70  ">
       <div className="md:w-1/2 mt-10 md:-mt-10">
         <h1 className="text-2xl font-bold text-white mb-2 ml-5 mt-10"> Innovate. Connect. Transform</h1>
         <h1 className="text-2xl text-white mb-2 ml-5">Your Tech Future with <br/>Netisens ICT</h1>
          <button className="bg-[rgba(27,148,7,1)] text-white px-7 py-3 rounded-lg hover:bg-green-700 transition ml-5 mt-5">Visit our website to learn more</button>
       </div>
       <div className="md:w-1/2 mt-10 md:mt-0">
         <img src={second} alt="secondpic" className='- w-80 ml-65 rounded-lg'  />
       </div>
     </div>
    </section>
  )
}

export default Body
