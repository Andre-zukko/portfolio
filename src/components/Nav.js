'use client'
import React, { useState } from 'react'
import  Link  from 'next/link'
import { Menu, X } from "lucide-react"

const NavLinks = () => {
    return (
        <>
            <Link className="text-blue-500" href='/portfolio'>Portfolio</Link>
            <Link className="text-blue-500" href='about'>About me</Link>
            <Link className="text-blue-500" href='/techstack'>Tech Stack</Link>
            <Link className="text-blue-500" href='/contact'>Contact</Link>
        </>
    )
}

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className='flex justify-end mr-6'>
                <div className='hidden w-full md:flex justify-between space-x-6 font-bold'>
                    <NavLinks />
                </div>

                <div className='md:hidden max-sm:text-blue-500'>
                    <button onClick={toggleNavbar}> {isOpen ? <X /> : <Menu />} </button>
                </div>
            </nav>
            {isOpen && (
                <div className='flex flex-col items-center basis-full space-y-6 mb-6 font-bold '>
                    <NavLinks />
                </div>
            )}
        </>
    )

}


export default Nav
