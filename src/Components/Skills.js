import React from 'react'
import { skills } from '../Utils/useConstant'

const Skills = () => {

    
  return (
    <div>

    <div className='mx-28 mt-16 my-24 shadow-lg p-4 bg-gray-300'>
    <h1 className='text-3xl font-bold my-8 text-center m-4'>Skills</h1>
        
        <div className=''>
            <ul className='flex flex-wrap  justify-left pl-[120px] '>
                {skills.map((skill)=>(<li className='border border-gray-200 rounded-lg px-6 py-2 mr-24 my-5 bg-gray-100 min-w-[150px] text-center flex items-center '><img className='w-[30px] h-[30px]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>{skill}</li>))}
                
        
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Skills