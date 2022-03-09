import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';


const Nav = () => {
    const [sidebarStatus, setSidebarStatus] = useState(false);

    const sidebarClose = ()=>{
        setSidebarStatus(false)
    }

    const sidebarOpen =()=>{
        setSidebarStatus(true)
    }

    //console.log("sidebar", sidebarStatus)
    return (
        <>
        
        <nav className="flex flex-col mx-4 my-6 space-y-4">
            
            <div className='inline-flex items-center justify-center '>
                {sidebarStatus ? 
                    <ArrowNarrowLeftIcon className='inline-block h-12 cursor-pointer' onClick={sidebarClose} /> : 
                    <ArrowNarrowRightIcon className='inline-block h-12 cursor-pointer' onClick={sidebarOpen} />
                }
               
            </div>

            <a href="#" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span className={`${sidebarStatus ? 'text-base ml-2' : 'sr-only'}`}>Folders</span>
            </a>
            <a href="#" className="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg px-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className={`${sidebarStatus ? 'text-base ml-2' : 'sr-only'}`}>Dashboard</span>
            </a>
            <a href="#" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span  className={`${sidebarStatus ? 'text-base ml-2' : 'sr-only'}`}>Messages</span>
            </a>
            <a href="#" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span className={`${sidebarStatus ? 'text-base ml-2' : 'sr-only'}`}>Documents</span>
            </a>
          </nav>
          </>
    );
};

export default Nav;