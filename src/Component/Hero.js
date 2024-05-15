import React from 'react'
import myImages from '../aaa.jpg';
import dashboard from './dashboard.jpeg'
import ReactLogo from './react1.png'
import TailwindLogo from './react2.png'
import LaravelLogo from './react3.png'
import Vscodelogo from './react7.png'
import GithubLogo from './react5.png'
import InertiaLogp from './react6.png'
function Hero() {
  return (
   <div className='ml-24 pt-8 flex mb-28 h-[85vh] bg-[#f9f4ef] w-auto'>
      <div className='text-blue-800 text-5xl pl-16 pt-14  font-bold  '> 
         <p className=''>The Expense Tracker you'll ever need</p> 
            <div className=''>
               <p className='text-blue-600 text-lg pt-3 font-semibold  justify-normal'> ✔ Manage Daily Expenses<br></br> ✔ Quickly Categorize Expenses< br></br> ✔ Add Recurring Inome and Expenses</p>
                  <div className='flex gap-4'>
                     <button className="rounded-lg bg-blue-800 w-36 h-10 mt-7 pb"><p className='text-[#F9F7F0] text-lg'>Login</p></button>
                     <button className="rounded-lg border-2 border-blue-800  w-36 h-10 mt-7 pb"><p className='text-black text-lg'>Register</p></button>
                  </div>


                  <div className=" h-[20vh] mt-20  ">
                     <h1 className='text-base px-4 mb-3'>Technologies used to develop the system</h1>
                     <div className='flex w-full  gap-6'>
                     <img src={ReactLogo} alt="" className='7 object-contain h-20'/>
                     <img src={TailwindLogo}  className='7object-contain  h-20' alt="" />
                     <img src={LaravelLogo}  className='7object-contain  h-20' alt="" />
                     </div>
              
                  </div>
                  <div className="flex w-full h-[20vh] mt-[-7vh] gap-6">
                     <img src={Vscodelogo} alt="" className=' h-20 object-contain'/>
                     <img src={GithubLogo}  className='h-20  object-contain' alt="" />
                     <img src={InertiaLogp}  className='h-20 object-contain ' alt="" />
                  </div>
          
            </div>
      </div>
      <div className='ml-10  w-full overflow-hidden relative'>
         <img src={dashboard} alt="description" className='absolute right-0 h-[70vh] shadow-2xl bg-white p-2 mr-[-15vw]'/>
      </div>
   </div>
  )
}

export default Hero