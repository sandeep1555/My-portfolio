import React from 'react'
import Body from './Body'

const Header = () => {
  return (<>
    <div className='flex justify-between shadow-lg'>

    <div>
        <img  className="w-[100px] h-[100px]" alt='logo' src="https://static.vecteezy.com/system/resources/previews/004/908/013/non_2x/coding-logo-design-template-free-vector.jpg"/>
    </div>


    <div className='flex m-2 p-2 items-center'>
        <ul className='flex mx-10 '>
            <li className='mx-5  px-2  border-b-2 border-b-blue-500 text-lg'>Home</li>
            <li className='mx-5  px-2  border-b-2 border-b-blue-500 text-lg'>Projects</li>
            <li className='mx-5  px-2  border-b-2 border-b-blue-500 text-lg'>Education</li>
            <li className='mx-5  px-2  border-b-2 border-b-blue-500 text-lg'>About Me</li>
            <li className='mx-5  px-2  border-b-2 border-b-blue-500 text-lg'>Contact</li>
        </ul>
        <button className='mx-5'>Dark Mode</button>
    </div>

    </div>
<Body/>
    </>
  )
}

export default Header