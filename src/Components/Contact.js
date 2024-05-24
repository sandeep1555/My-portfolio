import React, {  useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [name,setName]=useState(null);

 const [email,setEmail]=useState(null);
 const [message,setmessage]=useState(null);

 const [errorMessge,setErroeMessage]=useState(null);
 const [loading,setloading]=useState(true);

 const emailInfo={from_name:name,email:email,message:message}
  const handleClickSubmit=()=>
  {
    setloading(false);
    emailjs.send('service_sandeep', 'template_46k6ig6', emailInfo,{
      publicKey: 'm9cy0OeIkdx_JgRA_',
    }).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setErroeMessage("your message is send");
        setloading(true);
        setName("");
        setEmail("");
        setmessage("");
      },
      (error) => {
        console.log('FAILED...', error);
        setErroeMessage("sorry,something went wrong");
      },
    );
  }
  return (
   <div id="contact" className='p-2 font-mono text-black'>
    <div   className='bg-sky-600 my-32 p  px-14 pt-14 mx-28 rounded-lg'>
  <h1 className='text-center text-5xl text-white'>Contact</h1>

  <div className='flex'>
    <div className='p-14 w-6/12'>
    <div className='mx-4'>
    <h2 className='text-2xl text-white '>Connect With Me</h2>
    <p>If you want to know more about me or my work, or if you would just
like to say hello, send me a message. I'd love to hear from you.</p>
</div>

<form onSubmit={(e)=> e.preventDefault()} className='m-4 '>
    <div className='flex flex-col w-[450px]'>
    <label className='text-white '>Name</label>
    <input onChange={(e)=>setName(e.target.value)}  className='p-2 rounded-lg my-1 mb-4' type="text" placeholder='Enter your name'/>
    </div>

    <div className='flex flex-col w-[450px]'>
    <label className='text-white '>Email</label>
    <input onChange={(e)=>setEmail(e.target.value)}  className='p-2 rounded-lg my-1 mb-4' type="text" placeholder='Enter your email'/>
    </div>

    <div className='flex flex-col w-[450px] '>
    <label className='text-white '>Message</label>
    <textarea onChange={(e)=>setmessage(e.target.value)}  id="message" className="my-1 bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your message" required=""></textarea>
    </div>
<div className='flex  m-2 items-center justify-between pt-6'>

     <button class=" bg-white text-black px-2 py-2 w-40 rounded-md hover:bg-stone-200" onClick={handleClickSubmit} >{loading ?"Submit" : <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 mx-14" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>}</button>
     

     </div>
     {errorMessge && <p className='text-lg text-green-500 my-2 py-4'>{errorMessge}</p>}
     <h1 class="px-2 py-4  rounded-md text-white">Email me Directly,<a className='text-blue-300' href='mailto:19003071cse@gmail.com' c>click here</a></h1>
  
</form>
  </div>

<div className='mt-[100px] w-6/12 text-right font-mono text-white '>
    <h1 className='text-3xl font-bold p-2'>Email</h1>
    <a className='text-black' href="mailto:19003071cse@gmail.com">190030371cse@gmail.com</a>

    <h1 className='text-3xl font-bold p-2 pt-10'> Address</h1>
    <a className='text-black'>Labbipet,Vijayawada<br></br>INDIA</a>

    
    <h1 className="text-3xl font-bold p-2 pt-10">SOCIAL</h1>
    <div className='flex items-center my-4  ml-[380px]'>
      <a className='cursor-pointer hover:scale-125' href="https://leetcode.com/sandeep555"> <img  className='w-[40px] h-[40px] mx-2' alt="Leetcode Logo" src={"/images/leetcode-logo.png"}/></a>
      <a className='cursor-pointer hover:scale-125 ' href="https://github.com/sandeep1555"><img  className='w-[40px] h-[40px] mx-2' alt="Github Logo" src={"/images/github-logo.png"}/></a>
      <a className='cursor-pointer hover:scale-125' href="https://www.linkedin.com/in/sandeep-dasari555/"><img  className='w-[40px] h-[40px] mx-2'  alt='LinkedIn logo' src={"/images/linkedin-logo.png"}/></a>
       </div>
</div>
</div>



        </div>
        </div>
   
  )
}

export default Contact