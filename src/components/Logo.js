import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoPhoto from "../images/LogoPhoto.jpeg"

const Logo = () => {
  return <>
    <Link href='/'>
        <div className='ml-4 font-bold flex items-center space-x-4 h-20'>
            <Image src={logoPhoto} alt="Photo of me as a logo" className='w-10 rounded-3xl border-blue-500 border-4'/>
            <h2>André Zubko</h2>
        </div>
    </Link>
  </>
}

export default Logo