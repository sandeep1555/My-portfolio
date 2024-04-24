import React from 'react'
import Home from './Home'
import Skills from './Skills'
import Education from './Education'
import Contact from './Contact'
import AboutMe from './AboutMe'

const Body = () => {
  return (
    <div className='bg-blue-200'> 
<Home/>
<Skills/>
<Education/>
<AboutMe/>
<Contact/>
<h1 className='text-center font-bold '>Made with love by sandeep</h1>
    </div>
  )
}

export default Body