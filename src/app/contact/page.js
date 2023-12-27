import React from 'react'
import  Link  from 'next/link'

const Contact = () => {
  return <>
    <section className='min-h-[80vh] flex flex-col justify-between items-center m-8 p-8 space-y-10'>
      <h1 className='text-center text-blue-500 text-4xl font-bold p-6 '>Get in touch</h1>

      <div className='flex flex-col'>
        <h2 className='text-center text-3xl text-slate-400 mb-5'>Social media</h2>
        <div className='flex flex-col items-center space-y-6'>
          <Link className=' border text-blue-500 border-blue-500 rounded-xl px-6 py-2 font-bold lg:transition lg:ease-in-out delay-150 lg:bg-white lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-blue-500 lg:hover:text-white duration-300' href="https://www.instagram.com/handbalancing_by_andre/" target='_blank'>Instagram</Link>
          <Link className=' border text-blue-500 border-blue-500 rounded-xl px-6 py-2 font-bold lg:transition lg:ease-in-out delay-150 lg:bg-white lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-blue-500 lg:hover:text-white duration-300' href="https://www.facebook.com/andre.zubko.54" target='_blank'>Facebook</Link>
          <Link className=' border text-blue-500 border-blue-500 rounded-xl px-6 py-2 font-bold lg:transition lg:ease-in-out delay-150 lg:bg-white lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-blue-500 lg:hover:text-white duration-300' href="https://www.linkedin.com/in/andré-zubko-2b4161282/" target='_blank'>LinkedIn</Link>
          <Link className=' border text-blue-500 border-blue-500 rounded-xl px-6 py-2 font-bold lg:transition lg:ease-in-out delay-150 lg:bg-white lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-blue-500 lg:hover:text-white duration-300' href="https://github.com/Andre-zukko" target='_blank'>GitHub</Link>
        </div>
      </div>

      <div className='flex flex-col'>
        <h2 className='text-center text-3xl text-slate-400 mb-5' >Contact info</h2>
        <div className='flex flex-col space-y-6'>
          <Link className=' text-center border text-blue-500 border-blue-500 rounded-xl px-6 py-2 font-bold lg:transition lg:ease-in-out delay-150 lg:bg-white lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-blue-500 lg:hover:text-white duration-300' href="mailto:andrezubko03@gmail.com">andrezubko03@gmail.com</Link>
          <Link className=' text-center border text-blue-500 border-blue-500 rounded-xl px-6 py-2 font-bold lg:transition lg:ease-in-out delay-150 lg:bg-white lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-blue-500 lg:hover:text-white duration-300' href="tel:+421944261935">+421 944 261 935</Link>
        </div>
      </div>

    </section>
  </>
}

export default Contact
