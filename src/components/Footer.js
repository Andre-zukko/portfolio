import React from 'react'
import { LiaCopyrightSolid } from "react-icons/lia";


const Footer = () => {
  return <>
    <div className='flex justify-center items-center h-10 bg-blue-500'>
    <div className='text-white'>
      <LiaCopyrightSolid />
    </div>
      <p className='text-white'>CopyRights André Zubko 2023</p>
    </div>
  </>
}

export default Footer