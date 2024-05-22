import React from 'react'

const AboutMe = () => {
  return (
    <div  id="aboutme"  className='p-2 font-mono'>
    <div   className='mx-28 mt-32 shadow-lg p-4 bg-white rounded-lg' >
        <h1 className='text-3xl font-bold my-8 text-center  m-4 '>About Me</h1>

        <div className='px-[120px]'>

          <p className='text-xl'> Seeking a challenging opportunity as a fresher to leverage my skills in ReactJS, HTML, CSS, Git, and GitHub in a dynamic work environment where I can contribute effectively and grow professionally.</p>
          <ul className='mx-10 py-10 list-disc '>
            <li className='text-l'>Proficient in ReactJS for building interactive and responsive user interfaces.</li>
            <li>Strong foundation in HTML and CSS for crafting visually appealing web pages.</li>
            <li>Experienced in version control using Git, with a solid understanding of GitHub for collaborative development workflows.</li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default AboutMe