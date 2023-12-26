import React from 'react'
import { FaArrowAltCircleDown } from "react-icons/fa";
import Link from 'next/link'
import Image from 'next/image'
import LandingPhoto from "@/images/LandingPhoto.png"
import AboutPhoto from "@/images/About.JPG"

const Home = () => {
  return <>
    <section className='min-h-[90vh] flex flex-col justify-center items-center m-8 p-8 
                        lg:flex lg:flex-row-reverse lg:justify-center lg:space-x-10 lg:min-h-[90vh]'>
      <div className=' lg:w-1/3'>
        <Image src={LandingPhoto} alt="Brain as a light bulb in blue color" />
      </div>
      <div className='text-center space-y-4'>
        <h1 className='font-bold text-5xl text-blue-500 lg:text-6xl'>Welcome to my world</h1>
        <p className=' text-slate-400'>Place where you can find everything that you need to know about me</p>
      </div>

      <div className='flex flex-col justify-center items-center h-20 text-blue-500 mt-5 animate-bounce lg:hidden'>
        <FaArrowAltCircleDown />
      </div>
    </section>

    <section className='flex flex-col justify-center items-center space-y-5 bg-blue-500  min-h-[50vh] p-8'>
      <h2 className='font-bold text-4xl text-white mb-8 z-10'>Portfolio</h2>
      <Link href="/portfolio" className='lg:border lg:text-blue-500 lg:border-blue-500 lg:rounded-xl lg:px-6 lg:py-2 lg:font-bold lg:transition lg:ease-in-out lg:delay-150 lg:bg-white lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-blue-500 lg:hover:text-white lg:duration-300
                                        sm:border sm:text-blue-500 sm:rounded-xl sm:px-6 sm:py-2 sm:font-bold sm:bg-white'>Websites</Link>
      <Link href="/portfolio" className='lg:border lg:text-blue-500 lg:border-blue-500 lg:rounded-xl lg:px-6 lg:py-2 lg:font-bold lg:transition lg:ease-in-out lg:delay-150 lg:bg-white lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-blue-500 lg:hover:text-white duration-300
                                          sm:border sm:text-blue-500 sm:rounded-xl sm:px-6 sm:py-2 sm:font-bold sm:bg-white'>Design</Link>
    </section>

    <section className='flex flex-col justify-center items-center min-h-[90vh] space-y-6 text-center m-8 p-8 border-b border-blue-500
                        lg:flex lg:flex-row lg:min-h-screen lg:space-x-8'>
      <div className='w-40 lg:w-1/3'>
        <Image src={AboutPhoto} alt="photo of me" className='rounded-full border-4 border-blue-500' />
      </div>
      <div className='space-y-6'>
        <h2 className='font-bold text-4xl text-blue-500'>Something about me...</h2>
        <p className='mb-6 px-4 text-slate-500'>Hey there! I'm André, and I'm excited to give you a sneak peek into my world...</p>
        <div>
          <Link href="/about" className=' border text-blue-500 border-blue-500 rounded-xl px-6 py-2 font-bold lg:transition lg:ease-in-out delay-150 lg:bg-white lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-blue-500 lg:hover:text-white duration-300'>Read more</Link>
        </div>
      </div>
    </section>

    <section className='flex flex-col justify-center items-center text-center min-h-screen m-8 p-8'>

      <div className='space-y-10'>
        <h2 className='font-bold text-4xl text-blue-500 mb-6'>What I use for my project</h2>
        <div>
          <h3 className='font-bold text-2xl text-blue-500 mb-2'>TlDraw</h3>
          <p className='text-slate-500 px-4'>TlDraw helps me every time when I need to make visual structure before I throw my ideas to my design</p>
        </div>

        <div>
          <h3 className='font-bold text-2xl text-blue-500 mb-2'>Figma</h3>
          <p className='text-slate-500 px-4'>Every project that I create is first done with this tool. Everything, be it colors, buttons, texts, or various components, is visualized here before I'll start coding.</p>
        </div>

        <div className='mt-4'>
          <Link href="/techstack" className='border text-blue-500 border-blue-500 rounded-xl px-6 py-2 font-bold lg:transition lg:ease-in-out delay-150 lg:bg-white lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-blue-500 lg:hover:text-white duration-300'>See all of my Tech stack</Link>
        </div>

      </div>


    </section>
  </>
}

export default Home
