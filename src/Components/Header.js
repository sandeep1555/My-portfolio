import React, { useRef } from 'react'
import Body from './Body'
import { Link } from 'react-scroll';

const Header = () => {


  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (<>
    <div className='flex justify-between shadow-lg fixed w-full bg-white z-10 font-mono'>

    <div>
        <img  className="w-[200px] h-[80px] m-2 rounded-lg mx-6" alt='logo' src={"/images/portfolio-logo-1.jpg"}/>
    </div>


    <div className='flex m-2 p-2 items-center '>
        <ul className='flex mx-10'>
            <Link to="home" smooth={true} duration={500}><li className='mx-5  px-2  border-b-2 hover:border-b-sky-700 text-lg cursor-pointer'>Home</li></Link>
            <Link to="project" smooth={true} duration={500} ><li className='mx-5  px-2  border-b-2 hover:border-b-sky-700 text-lg cursor-pointer'>Projects</li></Link>
            <Link to="skills" smooth={true} duration={500}><li className='mx-5  px-2  border-b-2 hover:border-b-sky-700 text-lg cursor-pointer'>Skills</li></Link>
            <Link to="education" smooth={true} duration={500}><li className='mx-5  px-2  border-b-2 hover:border-b-sky-700 text-lg cursor-pointer'>Education</li></Link>
            <Link to="aboutme" smooth={true} duration={500}><li className='mx-5  px-2  border-b-2 hover:border-b-sky-700 text-lg cursor-pointer'>About Me</li></Link>
            <Link to="contact" smooth={true} duration={500}><li className='mx-5  px-2  border-b-2 hover:border-b-sky-700 text-lg cursor-pointer'>Contact</li></Link>
        </ul>
        {/* <button className='mx-5'>Dark Mode</button> */}
    </div>

    </div>
<Body/>
    </>
  )
}

export default Header