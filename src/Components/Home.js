import React from 'react'

const Home = () => {
  return (
    <div className="flex items-center">
    <div className='ml-16 my-16 '>

       <div className='w-6/12 m-4 '>

        <h1 className='text-5xl font-bold py-4'>Hi,I am Sandeep</h1>
        <h1 className='text-5xl font-bold py-4'>Front-End Developer</h1>
        <p className=' py-2'>Passionate about creating responsive and user-friendly web interfaces. Dedicated to staying updated with the latest technologies and trends in web development. Ready to tackle new challenges and contribute to innovative projects</p>
       </div>


       <div className='flex items-center m-4 w-6/12'>
      <a className='cursor-pointer hover:scale-125' href="https://leetcode.com/sandeep555"> <img  className='w-[40px] h-[40px] mx-2' alt="Leetcode Logo" src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png?f=webp"/></a>
      <a className='cursor-pointer hover:scale-125' href="https://github.com/sandeep1555"><img  className='w-[40px] h-[40px] mx-2' alt="Github Logo" src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"/></a>
      <a className='cursor-pointer hover:scale-125' href="https://www.linkedin.com/in/sandeep-dasari555/"><img  className='w-[60px] h-[60px] mx-2'  alt='LinkedIn logo' src="https://static.vecteezy.com/system/resources/thumbnails/018/910/721/small/linkedin-logo-linkedin-symbol-linkedin-icon-free-free-vector.jpg"/></a>
       </div>

       <div className='w-6/12'>
        <button className=' m-2 mx-10 bg-blue-500 text-white px-8 py-3 rounded-lg '>Resume</button>
       </div>

       </div>
       <div className='mr-24'>
        <img  alt="photo" src="https://www.albiorixtech.com/wp-content/uploads/2024/02/software-solution-1.png"/>
       </div>
       

    </div>
  )
}

export default Home