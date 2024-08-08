import { useState } from 'react';

// Css
import './App.css';

// /Icons
import { RiAccountPinBoxLine, RiCloseFill, RiMenu2Line, RiMoonFill, RiSunFill } from '@remixicon/react';

// Route
import { Route, Router, Routes } from 'react-router-dom';

// Component
import Navigation from './component/Navigation';
import Dashboard from './component/Dashboard';
import Internal from './component/Page/Internal';
import B2BInternal from './component/Page/B2BInternal';
import B2CInternal from './component/Page/B2CInternal';
import External from './component/Page/External';
import B2BExternal from './component/Page/B2BExternal';
import B2CExternal from './component/Page/B2CExternal';
import Prd from './component/Page/Prd';
import Specs from './component/Page/Specs';
import Software from './component/Page/Software';
import Hardware from './component/Page/Hardware';
import Online from './component/Page/Online';
import Dealership from './component/Page/Dealership';
import Notfound from './component/Page/Notfound';

function App() {

  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className='flex '>
      <div className='w-auto h-100'>
        <Navigation openSidebar={sidebar} />
        <div className={`z-50 fixed xl:hidden top-[10px]  ease-in-out duration-500 ${sidebar ? "-translate-0 left-[250px]" : "left-[0px]  -translate-x-full xl:-translate-x-0"}`}> <RiCloseFill onClick={handleSidebar} size={36} color='#bbbbb8' /></div>
      </div>
      <main className='w-full overflow-y-hidden '>
        <div className='flex justify-between md:px-5 px-[15px]   items-center py-3 bg-[#202028]'>
          <div onClick={handleSidebar} className='ease-in-out duration-500 xl:hidden '> <img src='/Icons/mobilemenu.svg' height={30} width={40} /></div>
          <div className='flex  justify-end items-center xl:justify-between w-full'>
            <div className='bg-[#2a2b30] rounded-md'>
              <div class="relative flex items-center border-[#43434e] border w-32 md:w-64 h-8 rounded-md focus-within:shadow-lg  overflow-hidden">
                <div class="grid place-items-center h-full w-9 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  class="peer text-xs font-medium h-full w-full bg-[#2a2b30] outline-none placeholder-white text-white pr-3"
                  type="text"
                  id="search"
                  placeholder="Search" />
              </div>
            </div>
            <div className='flex gap-3 ml-6'>
              <div className='flex items-center'>
                <div className='bg-[#44444a]  rounded-full p-[6px]'>
                  <img height={20} width={20} src="/Icons/envelop.svg" alt="evelop" />
                </div>
              </div>
              <div className='flex items-center'>
                <div className='bg-[#44444a]  rounded-full p-[6px]'>
                  <img height={20} width={20} src="/Icons/setting.svg" alt="goal" />
                </div>
              </div>
              <div className='flex items-center relative'>
                <div className='bg-[#44444a]  rounded-full p-[6px]'>
                  <img height={20} width={20} src="/Icons/notification.svg" alt="goal" />
                  <span className='bg-[#7294fe] absolute rounded-full top-[5px] right-2 p-1'></span>
                </div>
              </div>
              <div className='flex items-center lg:ml-6'>
                <img className='bg-[#44444a] h-30 w-30  rounded-full' height={30} width={30} src="https://randomuser.me/api/portraits/men/1.jpg" alt="goal" />
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/reports/internal' element={<Internal />} />
          <Route path='/reports/internal/b2b' element={<B2BInternal />} />
          <Route path='/reports/internal/b2c' element={<B2CInternal />} />
          <Route path='/reports/external' element={<External />} />
          <Route path='/reports/external/b2b' element={<B2BExternal />} />
          <Route path='/reports/external/b2c' element={<B2CExternal />} />
          <Route path='/activities/prd' element={<Prd />} />
          <Route path='/activities/specs' element={<Specs />} />
          <Route path='/revenue/product' element={<Software />} /> {/* Updated to match provided routes */}
          <Route path='/revenue/service' element={<Hardware />} /> {/* Updated to match provided routes */}
          <Route path='/engagement/online' element={<Online />} /> {/* Updated path and element */}
          <Route path='/engagement/dealerships' element={<Dealership />} /> {/* Updated path and element */}
          <Route path="*" element={<Notfound />} /> {/* Updated to use Notfound for 404 */}
        </Routes>
      </main>
    </div>
  )
}

export default App
