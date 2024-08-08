import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import '../App.css';

// /Icons
import { RiCloseFill, RiArrowDownSLine, RiDashboardLine, RiFileSearchLine, RiCalendarEventLine, RiShapesLine, RiLineChartLine } from "@remixicon/react";

// Updated nav menu links
const navlinks = [
  {
    name: 'Dashboard',
    icon: 'home',
    path: '/'
  },
  {
    name: 'Reports',
    icon: 'report',
    submenu: [
      {
        name: 'External',
        path: '/reports/external',
        subitem: [
          {
            name: 'B2B',
            path: '/reports/external/b2b',
            subMenuItem: [
              { name: 'Online', path: '/reports/external/b2b/online' },
              { name: 'Interviews', path: '/reports/external/b2b/interviews' },
              { name: 'Public Data', path: '/reports/external/b2b/public-data' },
              { name: 'Health', path: '/reports/external/b2b/health' }
            ]
          },
          {
            name: 'B2C',
            path: '/reports/external/b2c'
          }
        ]
      },
      {
        name: 'Internal',
        path: '/reports/internal',
        subitem: [
          { name: 'B2B', path: '/reports/internal/b2b' },
          { name: 'B2C', path: '/reports/internal/b2c' }
        ]
      }
    ]
  },
  {
    name: 'Activities',
    icon: 'check',
    submenu: [
      { name: 'PRD', path: '/activities/prd' },
      { name: 'Specs', path: '/activities/specs' }
    ]
  },
  {
    name: 'Revenue',
    icon: 'budget',
    submenu: [
      { name: 'Product Revenue', path: '/revenue/product' },
      { name: 'Service Revenue', path: '/revenue/service' }
    ]
  },
  {
    name: 'Engagement',
    icon: 'bag',
    submenu: [
      { name: 'Online', path: '/engagement/online' },
      { name: 'Dealerships', path: '/engagement/dealerships' }
    ]
  }
];



function Navigation({openSidebar}) {
  
  const [active, setActive] = useState(0);       //  1st Level menu State
  const [subMenuActive, setSubMenuActive] = useState(null);     //  2nd Level menu State
  const [subMenuActiveItem, setSubMenuActiveItem] = useState(null);  //  3rd Level menu State

  // Menu Handler
  const handleitemClick = (menuIndex) => {
    setSubMenuActive(null);
    setActive(menuIndex === active ? null : menuIndex);
  }
  return (
    <nav className={`md:h-screen z-50  h-100 mainmenu fixed top-0 left-0 bottom-0  xl:sticky w-[300px] xl:hover:w-[300px] overflow-y-auto overflow-x-hidden xl:w-[54px] 2xl:w-[54px] ease-in-out duration-500 bg-[#202028] ${ openSidebar ? "-translate-[40px]" : "-translate-x-full xl:-translate-x-0"}`}>
      <div className='text-gray-100 p-3'>
        <div className='flex items-center  rounded-md'>
         <img src="/Icons/filleddashboard.svg" alt="" height={30} width={30} />
          <h1 className='text-[20px]  ml-3 text-lg text-gray-200 font-medium'>Fitpeo</h1>
        </div>
      </div>

      <div className='flex flex-col '>

        {navlinks.map((item, index) => (
          <div key={index}>
           { <NavLink id={index} to={item?.path}>  <div key={index} onClick={() => handleitemClick(index)} className={` font-medium flex px-4 border-l-2 mt-3 my-4   justify-between  items-center cursor-pointer ease-in-out duration-300 text-gray-400 hover:border-[#7294fe] hover:text-white  ${active == index ? "text-white border-l-2 border-[#7294fe]" : 'border-[transparent]'} `}>
              <div className='flex items-center'><img src={`/Icons/${active == index ? "filled" : "empty"}${item.icon}.svg`} height={20} width={20} className='mr-4' /> <span className='text-[16px] w-[50px]'>{item?.name}</span> </div>
              {item.submenu && <div> <RiArrowDownSLine size={24} className={`ml-20 transition-all transform  ${active == index ? "rotate-180 " : null}`} />  </div>}
            </div></NavLink>}
            {item.submenu && active === index ? <div>
              {item.submenu.map((submenu, submenuIndex) => (
                <div className={`transition-all transform flex flex-col px-3 ps-7 mx-3 rounded-md cursor-pointer text-gray-400`}>
                  {<NavLink to={submenu?.path}> <div key={submenuIndex} onClick={() => { setSubMenuActiveItem(null); setSubMenuActive((submenuIndex === subMenuActive ? null : submenuIndex)) }} className='submenu flex items-center justify-between mb-2'>
                    <div className={` hover:before:bg-white   hover:text-white  ${subMenuActive == submenuIndex ? " before:bg-white text-white" : "before:bg-[#9ca3af]"}`}>{submenu?.name}</div>
                    {submenu.subitem && <span> <RiArrowDownSLine size={24} className={` transition-all transform  ${subMenuActive == submenuIndex ? "rotate-180 " : null}`} /> </span>}
                  </div></NavLink>}
                  {submenu.subitem && subMenuActive == submenuIndex && submenu.subitem.map((subsubMenu, subsubmenuIndex) => <div className={`subsubmenu transition-all transform flex flex-col ps-4 space-y-2 rounded-md cursor-pointer text-gray-400`}>
                  {<NavLink to={subsubMenu?.path}> <div key={subsubmenuIndex} onClick={() => setSubMenuActiveItem(subsubmenuIndex === setSubMenuActiveItem ? null : subsubmenuIndex)} className='submenu flex items-center justify-between mb-2'>
                      <div className={` hover:before:bg-white   hover:text-white  ${subsubmenuIndex == subMenuActiveItem ? " before:bg-white text-white" : "before:bg-[#9ca3af]"}`}>{ subsubMenu?.name}</div>

                    </div></NavLink>}
                  </div>)}
                </div>
              ))}
            </div> : null}
           
          </div>
        ))}
       <div className='absolute right-4 bottom-6 xl:left-4 xl:bottom-3'>
        <img src="/Icons/logout.svg" alt="" srcset="" height={30} width={30} />
      </div>
      </div>
    </nav>
  )
}
export default Navigation
