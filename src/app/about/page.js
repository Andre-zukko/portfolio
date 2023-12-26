import React from 'react'
import Image from 'next/image'
import programming from '@/images/programming.png'
import bengals from '@/images/Bengals.jpg'

const AboutMe = () => {
  return <>

    <section className='min-h-[100vh]'>
      <h1 className='font-bold text-center text-4xl text-blue-500 mt-10 mb-10'>About me</h1>
      <div className='m-8 p-8 flex flex-col justify-center items-center space-y-10 '>

        <div className='flex flex-col justify-center items-center'>
          <p className='text-slate-400 mb-10 mt-10'>Hey there! I'm André, and I'm excited to give you a sneak peek into my world. For the past seven years, handbalancing has been my cherished hobby, a journey that has taught me invaluable lessons in balance, resilience, and personal growth.</p>
          <p className='text-slate-400 mb-10 mt-10'>From the early days of wobbles to the present moments of graceful equilibrium, handbalancing has been a constant source of inspiration and discipline. While handbalancing remains close to my heart, I'm also diving headfirst into the dynamic realm of coding and programming. The world of IT has sparked my curiosity, and I am dedicated to hone my skills in this ever-evolving field.</p>
          <p className='text-slate-400 mb-10 mt-10'>Every line of code is a new challenge, and every programming concept is an opportunity for growth. I am on a mission to unravel the intricacies of the digital landscape, armed with determination and a passion for problem-solving. Professionally, I find myself at the beginning of a thrilling journey in the IT sector. I am committed to learning and evolving, taking each coding project as a chance to enhance my skills and contribute meaningfully. The path may be challenging, but my enthusiasm for coding fuels my quest for knowledge and excellence.</p>
          <div className='flex space-x-6 m-6'>
            <Image src={programming} alt="photo of me in handstand" className='w-52 h-52 rounded-full border-4 border-blue-500 mt-10 ' />
          </div>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <p className='text-slate-400 mb-10 mt-10'>In the midst of this journey, I share my life with two lively Bengals who add a touch of playfulness to my daily routine. And on a more personal note, I am fortunate to have a wonderful girlfriend accompanying me through the twists and turns of life.</p>
          <p className='text-slate-400 mb-10 mt-10'>So, join me as I navigate the delicate art of balancing handstands, coding challenges, and the joys of personal connections. From handstands to lines of code, each endeavor contributes to the vibrant mosaic that shapes my journey. And as I embark on this exciting venture into the IT world, the best is yet to come.</p>
          <div className='flex space-x-6 m-6'>
            <Image src={bengals} alt='photo of me in handstand' className='w-52 h-52 rounded-full border-4 border-blue-500 ' />
          </div>
        </div>

      </div>

    </section>

  </>
}

export default AboutMe