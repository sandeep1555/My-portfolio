import React, { useRef } from 'react'
import Home from './Home'
import Skills from './Skills'
import Education from './Education'
import Contact from './Contact'
import AboutMe from './AboutMe'
import Projects from './Projects'

const Body = () => {
  const home=useRef(null);

 
  return (
    <div className='bg-sky-300 font-mono'> 
<Home ref={home}/>

<Skills/>
<Education/>
<AboutMe/>
<Projects/>

<Contact/>
<h1 className='text-center font-bold '>Made with love by sandeep</h1>
    </div>
  )
}

export default Body