/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';

const NavItem = ({sidebarStatus, menuTitle, subMenu, subMenuArray, children}) => {
    const [subMenuToggleStatus, setSubMenuToggleStatus] = useState(false);
    const subMenuToggle = ()=>{
        setSubMenuToggleStatus(!subMenuToggleStatus)
      }
      
    useEffect(()=>{
        if(!sidebarStatus){
            setSubMenuToggleStatus(false)
        }
    },[sidebarStatus])  
    //console.log('submenu', sidebarStatus)
    return (
        <>
            <a href="#" className="inline-flex items-center justify-between py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-3" onClick={subMenuToggle}>
                {children}
              <span className={`${sidebarStatus ? 'text-base ml-2' : 'sr-only'}`}>{menuTitle}</span>
            </a>
            {/* submenu */}
            {subMenu && (
                <ul className={`${subMenuToggleStatus ? '' : 'hidden'} text-white space-y-2 ml-7`}>
                    {subMenuArray.map((subMenu, index)=> <li className='cursor-pointer active:text-orange-400 hover:text-purple-500' key={index}>{subMenu}</li>)}
                </ul>      
            )}
           
        </>
    );
};

export default NavItem;