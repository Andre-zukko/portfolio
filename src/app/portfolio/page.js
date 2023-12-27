import React from 'react'
import { FaRegImages } from "react-icons/fa6";
import { MdOutlineLocalOffer } from "react-icons/md";


const Portfolio = () => {
  return <>
    <section className='min-h-screen p-10 m-10'>
      <h1 className='font-bold text-center text-4xl text-blue-500 '>My work</h1>

      <div className='flex flex-col justify-center items-center h-[100vh]'>
        <div className=' text-9xl text-blue-500 max-sm:mb-14'> 
          <FaRegImages /> 
        </div>
        <h2 className='text-slate-500 text-2xl flex items-center justify-center h-20 max-sm:flex-col max-sm:text-center'>This section 
          <span className='border-b-4 border-blue-500 font-semibold ml-2 mr-2 max-sm:border-none'>is still waiting</span>
          for your 
          <span className='text-blue-500 font-semibold ml-2 mr-2'>offers</span>
          <span className='text-4xl text-blue-500'> <MdOutlineLocalOffer /> </span>
        </h2>
      </div>

      <div>
        <p className='text-slate-400 text-center'>Of course, this website is one of my projects so hopefuly, it's good enough for you.</p>
      </div>
      
    </section>
  </>
}

export default Portfolio
