import React from 'react'

const Education = () => {
  return (
    <div id="education" className='p-2 '> 
  <div  className='mx-28 mt-32 shadow-lg p-4 bg-stone-200 rounded-lg pb-10'>
    <h1 className='text-3xl font-bold my-10 text-center  m-4 font-mono text-sky-700 '>Education</h1>
    <div className=' relative flex  justify-center my-8 p-4 '>
    
        <div className='font-mono'>
          <p className='mt-[50px]'>2016-2017</p>
          <p className=' mt-[80px]'>2017-2019</p>
          <p className=' mt-[90px]'>2019-2023</p>
        </div>
        
        <div className='relative border-l-2  mx-10 h-[330px] border-black  '>
          <div className='absolute   w-[10px] h-[10px] bg-sky-700 rounded-full border-2 border-black ml-[-6px]'></div>
          <div className='absolute   w-[10px] h-[10px] bg-sky-700 rounded-full border-2 border-black ml-[-6px] mt-[100px]'></div>
          <div className='absolute   w-[10px] h-[10px] bg-sky-700 rounded-full border-2 border-black ml-[-6px] mt-[220px]'></div>
          <div className='absolute   w-[10px] h-[10px] bg-sky-700 rounded-full border-2 border-black ml-[-6px] mt-[330px]'></div>

        </div>
        <div>
        <div className='p-4  font-mono'>
          <h1 className='font-bold'>BTECH IN COMPUTER SCIENCE ENGINEERING</h1>
          <h4 className=''>K L University</h4>
          <p className='font-mono'>scored-8.01GPA</p>
        </div>
        <div className='p-4  mt-[10px] font-mono'>
          <h1 className='font-bold'>BOARD OF INTERMEDIATE,AP</h1>
          <h4>Sri Chaitanya Junior College</h4>
          <p>scored-9.2GPA</p>
        </div>
        <div className='p-4  mt-[15px] font-mono'>
          <h1 className='font-bold'>BOARD OF SECONDARY EDUCATION,AP</h1>
          <h4>Sri Chaitanya School</h4>
          <p>scored-9.7GPA</p>
        </div>
        </div>
            
        
    </div>
    </div>
    </div>
  )
}

export default Education