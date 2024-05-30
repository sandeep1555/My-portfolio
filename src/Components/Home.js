import React, { useRef } from 'react'
import { RESUME_URL } from '../Utils/useConstant'

const Home = ({ref}) => {

  return (
    <div id="home" ref={ref} className="flex items-center">
    <div className='ml-16 my-16 animate-fade-right '>

       <div className='w-7/12 m-4 mt-[150px]  '>

        <h1 className='text-5xl font-bold py-4'>Hi,I am Sandeep</h1>
        <h1 className='text-5xl font-bold py-4'>Front-End Developer</h1>
        <p className=' py-2'>Passionate about creating responsive and user-friendly web interfaces. Dedicated to staying updated with the latest technologies and trends in web development. Ready to tackle new challenges and contribute to innovative projects</p>
       </div>


       <div className='flex items-center mx-6 my-4  w-6/12 '>
      <a className='cursor-pointer hover:scale-125' href="https://leetcode.com/sandeep555" target="_blank" rel="noopener noreferrer"> <img  className='w-[40px] h-[40px] mx-2' alt="Leetcode Logo" src={"/images/leetcode-logo.png"}/></a>
      <a className='cursor-pointer hover:scale-125' href="https://github.com/sandeep1555" target="_blank" rel="noopener noreferrer"><img  className='w-[40px] h-[40px] mx-2' alt="Github Logo" src={"/images/github-logo.png"}/></a>
      <a className='cursor-pointer hover:scale-125' href="https://www.linkedin.com/in/sandeep-dasari555/" target="_blank" rel="noopener noreferrer"><img  className='w-[40px] h-[40px] mx-2'  alt='LinkedIn logo' src={"/images/linkedin-logo.png"}/></a>
       </div>

       <div className='w-6/12'>
        <button className=' my-8 mx-8 bg-sky-700 text-white px-14 py-4 rounded-lg '><a href={RESUME_URL} target="_blank" rel="noopener noreferrer">Resume</a></button>
       </div>

       </div>
       <div className='mr-24'>
        <img  alt="photo" src="https://www.albiorixtech.com/wp-content/uploads/2024/02/software-solution-1.png"/>
       </div>
       

    </div>
  )
}

export default Home