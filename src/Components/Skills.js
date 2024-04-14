import React from 'react'
import { skills } from '../Utils/useConstant'

const Skills = () => {

    
  return (
    <div className='m-28'>
        <h1 className='text-3xl font-bold my-8'>technologies and Tools</h1>

        <div>
            <ul className='flex flex-wrap '>
                {skills.map((skill)=>(<li className='border border-gray-200 rounded-lg px-6 py-2 mr-24 my-5 bg-gray-100'>{skill}</li>))}
                
        
            </ul>
        </div>
    </div>
  )
}

export default Skills