import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gray-200 p-14 m-28 '>
  <h1 className='text-center text-5xl'>Contact</h1>

  <div className='flex'>
    <div className='p-14 w-6/12'>
    <div className='mx-4'>
    <h2 className='text-2xl text-blue-300'>Connect With Me</h2>
    <p>If you want to know more about me or my work, or if you would just
like to say hello, send me a message. I'd love to hear from you.</p>
</div>

<form onSubmit={(e)=>e.preventDefault()} className='m-4 '>
    <div className='flex flex-col w-[450px]'>
    <label>Name</label>
    <input className='p-2 rounded-lg my-1 mb-4' type="text" placeholder='Enter your name'/>
    </div>

    <div className='flex flex-col w-[450px]'>
    <label>Email</label>
    <input  className='p-2 rounded-lg my-1 mb-4' type="text" placeholder='Enter your email'/>
    </div>

    <div className='flex flex-col w-[450px] '>
    <label>Message</label>
    <textarea id="message" className="my-1 bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your message" required=""></textarea>
    </div>
<div className='flex  m-2 items-center justify-between'>
     <a href='mailto:19003071cse@gmail.com'>Send me email directly</a>
     <button class=" bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400"><a href="mailto:19003071cse@gmail.com">Submit</a></button>
     </div>
</form>
  </div>

<div className='mt-[100px] w-6/12 text-right '>
    <h1 className='text-3xl font-bold p-2'>Email</h1>
    <a className='text-blue-600' href="mailto:19003071cse@gmail.com">190030371CSE@GMAIL.COM</a>

    <h1 className='text-3xl font-bold p-2 pt-10'> Address</h1>
    <a className='text-blue-600'>labbipet,Vijayawada<br></br>INDIA</a>

    
    <h1 className="text-3xl font-bold p-2 pt-10">SOCIAL</h1>
    <div className='flex items-center m-4 w-6/12 ml-[400px]'>
      <a className='cursor-pointer hover:scale-125' href="https://leetcode.com/sandeep555"> <img  className='w-[40px] h-[40px] mx-2' alt="Leetcode Logo" src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png?f=webp"/></a>
      <a className='cursor-pointer hover:scale-125 ' href="https://github.com/sandeep1555"><img  className='w-[40px] h-[40px] mx-2' alt="Github Logo" src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"/></a>
      <a className='cursor-pointer hover:scale-125 ' href="https://www.linkedin.com/in/sandeep-dasari555/"><img  className='w-[40px] h-[40px] mx-2'  alt='LinkedIn logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"/></a>
       </div>
</div>
</div>



        </div>
  )
}

export default Contact