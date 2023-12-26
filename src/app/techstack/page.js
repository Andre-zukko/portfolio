import React from 'react'
import Image from 'next/image'
import wireframe from "@/images/wireframe.png"
import figmaDesign from "@/images/figmaDesign.jpg"
import figmaBanner from "@/images/figmaBanner.jpg"
import codePhoto from "@/images/programming.png"
import next from "@/images/nextjs.png"
import { MdDraw } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const TechStack = () => {
  return <>
    <section className='min-h-screen p-8 m-8 space-y-6 lg:space-y-12'>
      <h1 className='font-bold text-4xl text-center text-blue-500 p-6 '>Tech stack</h1>
      <p className='text-slate-400'>In the ever-evolving landscape of web development, my journey is characterized by a carefully curated tech stack that empowers me to bring digital visions to life. Let me take you through the tools and technologies that form the backbone of my coding endeavors.</p>

      <div>
        <h2 className='flex justify-center items-center p-6 font-bold text-2xl space-x-2 text-blue-500 sm:text-xl'>Tl Draw
          <span className='ml-2 font-normal text-slate-500 border-b-4 border-blue-500 '>for Wireframes</span>
          <span className='text-4xl sm:text-2xl'> <MdDraw /> </span>
        </h2>
        <p className='text-slate-400'>Visualization is key, and for me, it starts with tl;draw. This intuitive tool is my go-to for crafting wireframes that lay the foundation for seamless user experiences. Whether it's brainstorming new project ideas or refining existing ones, tl;draw allows me to sketch out concepts effortlessly, translating abstract ideas into tangible blueprints.</p>
      </div>

      <div>
        <h2 className='flex justify-center items-center p-6 font-bold text-2xl space-x-2 text-blue-500'>Figma
          <span className='ml-2 font-normal text-slate-500 border-b-4 border-blue-500 '>for High-Quality Designs</span>
          <span className='text-4xl '> <FaFigma /> </span>
        </h2>
        <p className='text-slate-400'>When it comes to elevating wireframes to the next level, Figma steps in as an essential tool in my arsenal. Figma provides a collaborative and interactive platform for refining ideas and creating high-quality designs. Its versatility allows for seamless transitions from wireframes to pixel-perfect mockups, fostering a smooth transition from ideation to implementation.</p>
      </div>

      <div>
        <h2 className='flex justify-center items-center p-6 font-bold text-2xl space-x-2 text-blue-500'>ReactJS
          <span className='ml-2 font-normal text-slate-500 border-b-4 border-blue-500 '>for Coding Structure</span>
          <span className='text-4xl '> <FaReact /> </span>
        </h2>
        <p className='text-slate-400'>At the heart of my coding structure lies React, a powerful JavaScript library. React's component-based architecture provides a structured and efficient way to build interactive user interfaces. Leveraging the reusability of components, I ensure a modular and scalable codebase. This not only streamlines development but also enhances the maintainability of projects as they grow in complexity.</p>
      </div>

      <div>
        <h2 className='flex justify-center items-center p-6 font-bold text-2xl space-x-2 text-blue-500'>Tailwind
          <span className='ml-2 font-normal text-slate-500 border-b-4 border-blue-500 '>for Styles</span>
          <span className='text-4xl '> <SiTailwindcss /> </span>
        </h2>
        <p className='text-slate-400 mb-10'>For a sleek and responsive design, Tailwind CSS is my style companion. Tailwind's utility-first approach allows me to craft visually appealing interfaces without compromising on flexibility. With a comprehensive set of pre-built classes, I can efficiently style components and layouts, maintaining a cohesive design language throughout the application.</p>
      </div>

      <div>
        <h2 className='flex justify-center items-center p-6 font-bold text-2xl space-x-2 text-blue-500'>Next JS
          <span className='ml-2 font-normal text-slate-500 border-b-4 border-blue-500 '>for better work in react</span>
          <span className='text-4xl '> <TbBrandNextjs /> </span>
        </h2>
        <p className='text-slate-400 mb-10'>Next.js is my preferred React framework for web development. It excels in server-side rendering, automatic code splitting, and seamless integration of serverless functions/APIs. With built-in routing, static site generation, and excellent developer experience, it's a versatile choice. Compatible with popular technologies and easy deployment options, Next.js is ideal for creating high-performance web applications, backed by a strong community.</p>
      </div>

      <div>
        <h2 className='flex justify-center items-center p-6 font-bold text-2xl space-x-2 text-blue-500'>Git + GitHub
          <span className='ml-2 font-normal text-slate-500 border-b-4 border-blue-500 '>for version control</span>
          <span className='text-4xl flex '> <FaGitAlt /> + <FaGithub /> </span>
        </h2>
        <p className='text-slate-400 mb-10'>Git is my the best solution for version control, allowing efficient tracking and easy code rollback. GitHub, built on Git, is where collaboration shines with pull requests and issue tracking. Together, they streamline development, ensuring code integrity and facilitating teamwork. Indispensable in my toolkit, whether solo or collaborating.</p>
      </div>

    </section>

    <section className='min-h-screen p-8 m-8 space-y-10 lg:space-y-16'>
      <h2 className='font-bold text-4xl text-center text-blue-500 p-6'>Let's check some details of my work with these tools</h2>

      <div className='flex flex-col justify-center items-center space-y-4'>
        <h3 className='text-xl text-left text-slate-500'>This isn't just a drawing, it's masterpiece. Haha, of course I'm kidding. A simple example of how I usually create wireframe for a website.</h3>
        <Image src={wireframe} className='rounded-2xl lg:w-2/3' alt="photo of wireframe which is draw before beggin of design" />
      </div>

      <div className='flex flex-col justify-center items-center space-y-4'>
        <h3 className='text-xl text-left text-slate-500' >Designing a website in Figma is a daily routine.</h3>
        <Image src={figmaDesign} className='rounded-2xl lg:w-2/3' alt="photo of wireframe which is draw before beggin of design" />
      </div>

      <div className='flex flex-col justify-center items-center space-y-4'>
        <h3 className='text-xl text-left text-slate-500'>Above, you can see simple website designs created by myself in Figma, not to mention that I can make similar (and more) things, such as this advertising banner.</h3>
        <Image src={figmaBanner} className='rounded-2xl lg:w-2/3' alt="photo of wireframe which is draw before beggin of design" />
      </div>

      <div className='flex flex-col justify-center items-center space-y-4'>
        <h3 className='text-xl text-left text-slate-500'>As I said before, my best tool for coding is ReactJS. On the photo you can see my common code style. Components, logic, and just a bit of love: things I include in my code.</h3>
        <Image src={codePhoto} className='rounded-2xl lg:w-2/3' alt="photo of wireframe which is draw before beggin of design" />
      </div>

      <div className='flex flex-col justify-center items-center space-y-4'>
        <h3 className='text-xl text-left text-slate-500'>Without order, the chaos just fills your space. To make sure there's no chaos in my system, NextJs helps me with setting the rails for all of my components and files.</h3>
        <Image src={next} className='rounded-2xl lg:w-2/3' alt="photo of wireframe which is draw before beggin of design" />
      </div>

    </section>
  </>
}

export default TechStack