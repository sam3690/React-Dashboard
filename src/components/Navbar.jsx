'use client'
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='flex justify-between flex-col relative top-0 inset-0 z-50 rounded-b-lg w-screen'>
       {/* Desktop app */}
        <div className='flex flex-row bg-white  w-full drop-shadow-lg p-4 fixed top-0 left-0 right-0 z-40"'>
            <h1 className='text-[#4c75f2] text-2xl font-bold mr-10'>CASI</h1>
            <RxHamburgerMenu className='text-4xl text-gray-600 sm:hidden block' onClick={()=>setToggle(!toggle)}/>
        </div>        
         {/* Mobile app */}
        <div className={`${toggle? "flex scale-up-ver-top" : "scale-down-ver-top hidden"} static flex-row bg-white w-[200px] drop-shadow-lg p-4 inset-0 z-50`}>
        
        </div>
    </nav>
  )
}

export default Navbar