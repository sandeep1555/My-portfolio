import React, { useState } from 'react'

const Projects = () => {



const project1Img=['/images/netflix-img-1.png','/images/netflix-img-2.png','/images/netflix-img-3.png','/images/netflix-img-4.png'];
const [ActiveImg,setactiveImg]=useState(0);

const handleNextButton=()=>
{
  if(ActiveImg===project1Img.length-1)
  {
    setactiveImg(0);
  }
  else{
    setactiveImg(ActiveImg+1);
  }
}
const handlePreviousButton=()=>
{
  if(ActiveImg===0)
  {
    setactiveImg(project1Img.length-1)
  }
  else{
    setactiveImg(ActiveImg-1);
  }
}




  return (
    <div id="project" className='p-2'>
    <div className='mx-28 mt-32 shadow-lg p-4 bg-gray-200 rounded-lg' > 
        <h1 className='text-3xl font-bold my-8 text-center '>Projects</h1>

        <div className='  rounded-lg py-6 flex justify-center '>
      
          

            
             <div className='border w-9/12 rounded-lg shadow-lg m-2 bg-white pb-4'>
             <h1 className='text-center m-8 font-bold text-blue-600 text-xl'>Netflix-gpt</h1>
              <div className='relative flex  justify-center m-4'>
              <button className=' absolute left-0 top-[45%] bg-black rounded-full ml-[45px]  text-white' onClick={handlePreviousButton}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</button>
              {project1Img.map((img,i)=>
              (
                <img alt='project-pic' className={' border h-[400px] rounded-lg object- '+(ActiveImg===i ? "block" :"hidden" )}src={img}/>
              ))}
              
              <button className='absolute right-0 top-[45%] bg-black rounded-full mr-[45px]  text-white' onClick={handleNextButton}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</button>
                </div>
              

                <div className='my-5'>
                    <ul className='flex justify-center'>
                        <li className='bg-gray-200 px-2 py-1 m-2 rounded-lg'>Reactjs</li>
                        <li className='bg-gray-200 px-2  py-1 m-2 rounded-lg'>firebase</li>
                        <li className='bg-gray-200 px-2 py-1 m-2 rounded-lg'>TailwindCSS</li>
                        <li className='bg-gray-200 px-2 py-1 m-2 rounded-lg'>Redux</li>
                    </ul>
                </div>
                <div className='flex justify-center'>
                <button className='flex  bg-blue-500 text-white py-2 px-2 h-[50px] w-[150px] items-center rounded-lg justify-between m-2 '><a href='https://github.com/sandeep1555/Netflix-GPT'>Source code </a> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
</button>
                <button className='flex  bg-blue-500 text-white p-2 h-[50px] w-[150px] items-center rounded-lg justify-between m-2 '><a href='https://netflix-gpt-pi-jet.vercel.app/'>Live Demo </a> <svg className='w-[30px] h-[30px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</button>

</div>
             </div>
        </div>
    </div>
    </div>
  )
}

export default Projects