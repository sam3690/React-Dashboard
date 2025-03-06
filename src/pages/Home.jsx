import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import Layout from '../layout'
import U5Community from '../components/U5Community'
import RouterComp from '../components/RouterComp'
import U5HealthFacility from '../components/U5HealthFacility'
import PregnancyCommunity from '../components/PregnancyCommunity'
import PregnantHealthCare from '../components/PregnantHealthCare'



const Home = () => {
    const [isActive, setIsActive] = useState(false)
    const [activeSection, setActiveSection] = useState('U5Community');

    
    const handleDivClick = (section) => {
        
        setActiveSection(activeSection === section ? null : section);
        
      };

  return (

    <div className='flex flex-col justify-center items-center '>
        <div className='grid grid-cols-2 sm:grid-cols-4 sm:gap-6 gap-3 p-2 '>
                {/* div 1*/}
            <div className={`relative bg-white rounded-lg flex flex-col items-between justify-center shadow-md sm:h-[150px] h-[80px] max-h-[100px] sm:w-[260px] w-[150px] max-w-[400px] cursor-pointer`} onClick={() => handleDivClick('U5Community')}>
                    <div className='flex flex-row w-max justify-between items-contain items-center gap-3 max-2 p-[10px]'>
                        <img src="/assets/6890-copy.jpg" loading='lazy' alt="child_5" className="sm:h-[50px3 h-[50px] sm:w-[50px] w-[30px] object-cover rounded-full " />
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-medium sm:text-xl text-xs'>Community</h1>
                            <p className='sm:text-sm text-[8px]'>Children under 5</p>
                        </div>
                    </div>      
                <div className={`${activeSection !== 'U5Community'? 'transition-opacity opacity-0 bg-gray-400 scale-down-hor-left' : 'transition-opacity opacity-100 scale-up-hor-left bg-blue-900'} absolute rounded-b-lg justify-end bottom-0  h-[5px] w-full`}></div>
            </div>
            {/* Div 2 */}
            <div className='relative bg-white rounded-lg flex items-center justify-center shadow-md sm:h-[150px] h-[80px] max-h-[100px] sm:w-[260px] w-[150px] max-w-[400px] cursor-pointer' onClick={() => handleDivClick('U5HealthFacility')}>
                <div className='flex flex-row w-max justify-between items-contain items-center gap-3 max-2 p-[10px]'>
                    <img src="/assets/child_n_doc.jpg" alt="child_5" className="sm:h-[50px] h-[53px] sm:w-[50px] w-[30px] object-cover rounded-full " />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-medium sm:text-xl text-xs'>Health Facility</h1>
                        <p className='sm:text-sm text-[8px]'>Children under 5</p>
                    </div>
                </div>
                <div className={`${activeSection !== 'U5HealthFacility'? 'transition-opacity opacity-0 bg-gray-400 scale-down-hor-left' : 'transition-opacity opacity-100 scale-up-hor-left bg-blue-900'} absolute rounded-b-lg justify-end bottom-0 h-[5px] w-full`}></div>      
            </div>
            {/* Div 3 */}
            <div className='relative bg-white rounded-lg flex items-center justify-center shadow-md sm:h-[150px] h-[80px] max-h-[100px] sm:w-[260px] w-[150px] max-w-[400px] cursor-pointer' onClick={() => handleDivClick('PregnancyCommunity')}>
                <div className='flex flex-row w-max justify-between items-contain items-center gap-3 max-2 p-[10px]'>
                    <img src="/assets/pregnant-women.jpg" alt="child_5" className="sm:h-[50px] h3[50px] sm:w-[50px] w-[30px] object-cover rounded-full " />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-medium sm:text-xl text-xs'>Community</h1>
                        <p className='sm:text-sm text-[8px]'>Pregnant and lactating women</p>
                    </div>
                </div>      
                    <div className={`${activeSection !== 'PregnancyCommunity'? 'transition-opacity opacity-0 bg-gray-400 scale-down-hor-left' : 'transition-opacity opacity-100 scale-up-hor-left bg-blue-900'} absolute rounded-b-lg justify-end bottom-0  h-[5px] w-full`}></div>  
            </div>
            {/* Div 4 */}
            <div className='relative bg-white rounded-lg flex items-center justify-center shadow-md sm:h-[150px] h-[80px] max-h-[100px] sm:w-[260px] w-[150px] max-w-[400px] cursor-pointer' onClick={() => handleDivClick('PregnantHealthCare')}>
                <div className='flex flex-row w-max justify-between items-contain items-center gap-3 max-2 p-[10px]'>
                    <img src="/assets/lady_and_doc.jpg" alt="child_5" className="sm:h-[50px] h-[30px] sm:w-[50px] w-[30px] object-cover rounded-full " />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-medium sm:text-xl text-xs'>Health Facility</h1>
                        <p className='sm:text-sm text-[8px]'>Pregnant and lactating women</p>
                    </div>
                </div>    
                <div className={`${activeSection !== 'PregnantHealthCare'? 'transition-opacity opacity-0 bg-gray-400 scale-down-hor-left' : 'transition-opacity opacity-100 scale-up-hor-left bg-blue-900'} absolute rounded-b-lg justify-end bottom-0  h-[5px] w-full`}></div>    
            </div>            
        </div>
        {/* data section */}
        {activeSection === 'U5Community' && (
                <div className='w-full max-w-7xl mt-6'>
                    <U5Community />
                </div>
            )}
        {activeSection === 'U5HealthFacility' && (
                <div className='w-full max-w-7xl mt-6'>
                    <U5HealthFacility />
                </div>
            )}
        {activeSection === 'PregnancyCommunity' && (
                <div className='w-full max-w-7xl mt-6'>
                    <PregnancyCommunity />
                </div>
            )}
        {activeSection === 'PregnantHealthCare' && (
                <div className='w-full max-w-7xl mt-6'>
                    <PregnantHealthCare />
                </div>
            )}
        
    </div>
  )
}

export default Home