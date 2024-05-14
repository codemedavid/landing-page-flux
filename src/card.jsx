import React from 'react';

import myImages from './aaa.jpg';

function Card(props) {
  return (
    <div className='w-full bg-gradient-to-r from-[#F9F7F0] to-white ' >
      
        <div className='text-black text-center w-full text-3xl  h-[10vh] flex p-3 px-14' >
<div className='mt-4 ml-4 '>
        <svg width="40" height="37" xmlns="http://www.w3.org/2000/svg" ><path d="M14.25 1.116c.039.899-.51.468-.79.629-.894.524-1.491 2.04-2.612 2.125-.423.87-1.121.898-1.874 1.503-.327.256-.463.839-.756 1.097L4.524 9.74a2.395 2.395 0 01-.44.314c-.378.219-.656.717-1.096.81-.475.106-1.601-.775-2.633-2.012C-.47 7.265.33 6.928.873 6.327c.916-1.022 2.48-2.064 3.585-2.753.843-.537 1.677-1.13 2.59-1.482.935-.357 1.779-.842 2.738-1.041.7-.141 1.522.063 2.206 0a9.596 9.596 0 012.258.065m15.426-.47c-.06 1.046-1.038.955-1.593 1.363C26.32 3.31 24.8 5.656 22.63 6.583c-1.07 1.412-2.411 1.952-4.056 3.254-.711.56-1.21 1.417-1.877 1.965-2.887 2.381-5.668 4.524-8.64 6.823-.303.236-.646.468-1.008.697-.834.528-1.675 1.394-2.543 1.77-.95.413-2.376-.279-3.375-1.544-.43-1.849 1.112-2.657 2.38-3.737 2.13-1.82 5.33-4.012 7.558-5.536 1.707-1.17 3.395-2.426 5.138-3.43 1.789-1.03 3.439-2.179 5.224-3.063 1.303-.643 2.758-.96 4.038-1.53A40.762 40.762 0 0129.676.646m-.29 10.7c.229.918-.566.8-.896 1.136-1.048 1.058-1.721 3.056-3.254 3.7-.563 1.17-1.522 1.532-2.603 2.507-.464.426-.731 1.128-1.177 1.542-1.94 1.77-3.91 3.263-6.082 4.772a6.36 6.36 0 01-.748.43c-.618.313-1.24.914-1.901 1.065-.731.161-1.856-.807-2.662-2.199-.401-1.784.715-2.129 1.6-2.818 1.49-1.15 3.693-2.49 5.192-3.486 1.154-.755 2.247-1.633 3.417-2.292 1.2-.68 2.244-1.52 3.44-2.128.868-.448 1.927-.61 2.79-1.029.92-.447 1.873-.85 2.884-1.2" fill="#2174EA" fill-rule="evenodd"/></svg>
        </div>
          <div className=' text-white text-xl font-semibold py-2 ml-[1000px]'>
             
             
            <button className="rounded-lg  bg-blue-800 w-36 h-10 mb-3"><p className='text-[#F9F7F0] text-lg'>Login/Register</p></button>
            </div>
            
              
              
        
             
        </div>
        <div className='ml-24 pt-8 flex'>
        <div className='text-blue-800 text-5xl pl-16 pt-16   font-bold  '> 
        <p>The Expense Tracker<br></br> you'll ever need</p> 
        <div className=''>
        <p className='text-blue-600 text-lg pt-3 font-semibold  justify-normal'> ✔ Calculate Users Expenses<br></br> ✔ Quickly Categorize Expenses< br></br> ✔ Manage Your Income </p>
        <button className="rounded-lg bg-blue-800 w-36 h-10 ml-20 mt-7"><p className='text-[#F9F7F0] text-lg'>Learn More</p></button>
     
<p><br></br></p>
        </div>
        
             
        
        </div>
     
        <div className='  ml-10  w-[1000px] h-[400x] '>
             <img src={myImages} alt="description"/>
              </div>
        
        
        </div>
       <p><br /> </p>
       <p><br /> </p>
       <p><br /> </p> 
       <p><br /> </p>
       <p><br /> </p> 
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


