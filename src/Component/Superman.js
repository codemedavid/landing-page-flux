import React from 'react'
import myImages from '../aaa.jpg';
import dashboard from './dashboard.jpeg'
function Superman() {
    return (

        <div className='w-full bg-[#f9f4ef]' >
        <div className='flex bg-blue-800 pt-14 h-[500px]'>
       <div className=' text-lg  px-16  font-bold ml-16 text-[#F9F7F0]   '> 
        <p className='pt-5'>COLLECT EXPENSE DATA</p> 
        <div className='text-5xl font-semibold mt-3  flex'>
        <p>Understand Your <br/>Expenses Better<br/> <p className='font-normal text-lg pt-4 text-slate-300'>
        Our expense tracker app collects all the information <br/> about what we spend money on.
         It helps us keep <br/> track of our expenses easily and understand where<br/> our money goes,
          making it simple to manage our finances.</p></p>
        <div className='  ml-32  w-[600px] h-[400x] '>
             <img src={dashboard} alt="description"/>
         </div>             
          </div>
        </div>
        </div>
        </div>
       
    )
}

export default Superman