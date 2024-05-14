import React from 'react';
import Header from './Component/Header';
import Hero from './Component/Hero';
import myImages from './aaa.jpg';

function Card() {
  return (
    <div className='w-full bg-[#f9f4ef]' >
      <Header />
      <Hero/>
       <div className='flex bg-blue-800 pt-14 h-[500px]'>
       <div className=' text-lg  px-16  font-bold ml-16 text-[#F9F7F0]  '> 
        <p>COLLECT ACCURATE DATA</p> 
        <div className='text-5xl font-semibold mt-3  flex'>
        <p>Understand Your <br/>Expenses Better<br/> <p className='font-normal text-lg pt-4 text-slate-300'>"Equipped with specialized tools and cutting-edge  <br></br>technology, it diligently gathers detailed information, <br></br> double-checking every piece  to ensure absolute<br></br> accuracy before processing  and presenting the final results."</p></p>
        <div className='  ml-32  w-[600px] h-[400x] '>
             <img src={myImages} alt="description"/>
         </div>             
          </div>
        </div>
       </div>

       <div className='flex pt-20 h-[500px]'>
       <div className=' text-lg  px-16  font-bold mr-16 text-blue-800 flex '> 
       <div className='  ml-16  w-[600px] h-[300px] flex'>
             <img src={myImages} alt="description"/>
          
       
        <div className='text-5xl font-semibold mt-3  '>
        <p className='text-lg    font-bold ml-24 text-blue-800  '> COLLECT ACCURATE DATA</p> 
        <p className='text-5xl font-semibold mt-3 ml-24 w-[450px]  '>Understand Your Expenses Better <p className='font-normal text-lg pt-4 text-blue-500'>"Equipped with specialized tools and cutting-edge  <br></br>technology, it diligently gathers detailed information, <br></br> double-checking every piece  to ensure absolute<br></br> accuracy before processing  and presenting the final results."</p></p>
        </div>      
          </div>

        </div>
       </div>
       <div className='text-center  '>
       <div className='text-5xl font-semibold mt-3  '>
        <p className='text-lg    font-bold  text-blue-800  '> COLLECT ACCURATE DATA</p> 
        <p className='text-5xl font-semibold mt-3 text-blue-800   '>Understand Your Expenses Better <p className='font-normal text-lg pt-4 text-blue-500'>"Equipped with specialized tools and cutting-edge  <br></br>technology, it diligently gathers detailed information."</p></p>
        </div>  
        
       </div>
       <div className='  pl-72 pt-4'>
             <img src={myImages} alt="description"/>
         </div> 
         <div className='bg-blue-800 h-[450px]  '>
       <div className='text-5xl font-semibold mt-3  '> 
        <p className='text-5xl font-semibold mt-3 text-[#F9F7F0]  text-center  pt-32   '>Start Managing Your Expenses <p className='font-normal text-lg pt-4 text-slate-300'>"Equipped with specialized tools and cutting-edge  <br></br>technology, it diligently gathers detailed information."</p></p>
        <button className="rounded-sm  bg-blue-800 w-36 h-10 mb-3 border-2 border-[#F9F7F0] ml-[89vh] mt-5"><p className='text-[#F9F7F0] text-lg'>Login/Register</p></button>
        </div>  
        </div>
       <div className='text-center text-blue-800 text-3xl font-bold mt-7'>User Feedback<br></br><p className='text-xl font-normal text-blue-600'>we are honored to serve you!</p> </div>
        <div className='flex  gap-3 '>
            <div className='w-[33%] p-10 rounded-md shadow-xl h-[50vh] '>
            <p className='px-1 text-xl font-semibold text-blue-800 flex hover:text-blue-600 text-center' >Angelo david </p>
            </div>
            <div className='flex p-10 w-[33%] shadow-xl  rounded-md  hover:text-blue-600 h-[50vh]'>
            <p className='px-1 text-xl font-semibold text-blue-800 flex hover:text-blue-600 text-center' >Maria Donaire </p>
            </div>
            <div className='p-10 w-[33%] shadow-xl  rounded-md  h-[50vh]'>
            <p className='px-1 text-xl font-semibold text-blue-800 flex hover:text-blue-600 text-center' >Enzo Sergio </p>


            </div>
        </div>
        <br></br>
        <div className='flex shadow-lg bg-blue-800 text-[#F9F7F0] text-3xl h-16 pt-3'>
          <p className='pl-[150px] font-semibold'>F</p>
          <p className='pl-[900px] text-sm font-medium pt-3'>All rights Reserve 2024</p>
       
        </div>
</div>
  
  )
}

export default Card;


