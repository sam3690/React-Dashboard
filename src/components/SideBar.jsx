import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
import { FaMobile } from 'react-icons/fa';
import { SlOptions } from "react-icons/sl";
import { Link } from 'react-router-dom';
import Home from '../pages/Home';


const SideBar = () => {
  return (
        <div className='group hidden sm:flex flex-col z-10 gap-10 bg-white h-screen hover:w-[200px] w-[80px] duration-300 max-w-[300px] justify-start shadow-[10px_0_15px_-3px_rgba(0,0,0,0.1)] p-4 fixed pt-22'>
            {/* single item */}
            <Link to={Home}><div className={` flex flex-row group-hover:m-2 duration-300 justify-start items-center w-full h-[30px] max-h-[30px]`}>
                <div><FaHome className='text-2xl duration-300 group-hover:text-xl text-gray-600'/></div>
                <div className='flex w-full justify-center items-center '><span className={`justify-between opacity-0 transition-opacity text-center duration-150 group-hover:opacity-100 text-base text-gray-600`}>Home</span></div>
            </div></Link>
            <div className={` flex flex-row group-hover:m-2 duration-300 justify-start items-center w-full h-[30px] max-h-[30px]`}>
                <div><FaAlignCenter className='text-2xl duration-300 group-hover:text-xl text-gray-600'/></div>
                <div className='flex w-full justify-center items-center '><span className={`justify-between opacity-0 transition-opacity text-center duration-150 group-hover:opacity-100 text-base text-gray-600`}>C Engagements</span></div>
            </div>
            <div className={` flex flex-row group-hover:m-2 duration-300 justify-start items-center w-full h-[30px] max-h-[30px]`}>
                <div><FaClipboard className='text-2xl duration-300 group-hover:text-xl text-gray-600'/></div>
                <div className='flex w-full justify-center items-center '><span className={`justify-between opacity-0 transition-opacity text-center duration-150 group-hover:opacity-100 text-base text-gray-600`}>Detailed Progress</span></div>
            </div>
            <div className={` flex flex-row group-hover:m-2 duration-300 justify-start items-center w-full h-[30px] max-h-[30px]`}>
                <div><FaMobile className='text-2xl duration-300 group-hover:text-xl text-gray-600'/></div>
                <div className='flex w-full justify-center items-center '><span className={`justify-between opacity-0 transition-opacity text-center duration-150 group-hover:opacity-100 text-base text-gray-600`}>App users</span></div>
            </div>
            <div className={` flex flex-row group-hover:m-2 duration-300 justify-start items-center w-full h-[30px] max-h-[30px]`}>
                <div><SlOptions className='text-2xl duration-300 group-hover:text-xl text-gray-600'/></div>
                <div className='flex w-full justify-center items-center '><span className={`justify-between opacity-0 transition-opacity text-center duration-150 group-hover:opacity-100 text-base text-gray-600`}>Settings</span></div>
            </div>
        </div>
  )
}

export default SideBar