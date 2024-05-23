import React from 'react'
import {  skills } from '../Utils/useConstant'

const Skills = () => {

    
  return (
    <div id="skills" className='p-2'>
    <div className='flex  flex-col justify-center items-center mx-24 mt-11 shadow-lg pb-8  bg-sky-600 rounded-lg'>

    <div className=''>
    <h1 className='text-3xl font-bold my-8 text-center m-4 text-white'>Skills</h1>
    </div>
        <div className='items-center ml-[54px] '>
            <ul className='flex flex-wrap  '>
                {skills.map((skill)=>(<li className='border border-gray-200 rounded-lg px-4 py-4 cursor-pointer mr-24 my-5 min-w-[190px] bg-gray-100  text-center flex items-center '><img className='w-[30px] h-[30px] mr-4 ' src={skill.url}/><h4 className='font-medium'>{skill.name}</h4></li>))}
                
        
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Skills