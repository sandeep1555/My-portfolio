import React from 'react'

const Home = () => {
  return (
    <di className="">
    <div className='m-24 flex '>

       <div className='w-6/12 m-4 '>

        <h1 className='text-5xl font-bold py-4'>Hi,I am Sandeep</h1>
        <h1 className='text-5xl font-bold py-4'>Front-End Developer</h1>
        <p className=' py-2'>Passionate about creating responsive and user-friendly web interfaces. Dedicated to staying updated with the latest technologies and trends in web development. Ready to tackle new challenges and contribute to innovative projects</p>
       </div>


       <div className='flex items-center m-4'>
       <img  className='w-[40px] h-[40px] mx-2' alt="Leetcode Logo" src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png?f=webp"/>
       <img  className='w-[40px] h-[40px] mx-2' alt="Github Logo" src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"/>
       <img  className='w-[60px] h-[60px] mx-2'  alt='LinkedIn logo' src="https://static.vecteezy.com/system/resources/thumbnails/018/910/721/small/linkedin-logo-linkedin-symbol-linkedin-icon-free-free-vector.jpg"/>
       </div>

       <div>
        <button className=' m-2 mx-10 bg-blue-500 text-white px-8 py-3 rounded-lg '>Resume</button>
       </div>

       </div>
       <div>
        <img  alt="photo" src="https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg"/>
       </div>

    </di>
  )
}

export default Home