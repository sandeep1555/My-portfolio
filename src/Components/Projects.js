import React from 'react'

const Projects = () => {
  return (
    <div id="project" className='p-2'>
    <div className='mx-28 mt-32 shadow-lg p-4 bg-gray-200 rounded-lg' > 
        <h1 className='text-3xl font-bold my-8 text-center '>Projects</h1>

        <div className='flex  rounded-lg'>
            <div className='border bg-white  p-4 w-6/12 rounded-lg shadow-lg m-2'>
                <img alt="project-pic"  className='h-[300px] border rounded-lg  ' src="https://blog.hootsuite.com/wp-content/uploads/2023/05/How-to-Create-a-YouTube-Channel-03.png"/>
                <h1 className='text-center p-2 font-bold '>My-youtube Clone</h1>
                <div className=''>
                    <ul className='flex justify-center'>
                        <li className='bg-gray-200 px-2 py-1 m-2 rounded-lg'>Reactjs</li>
                        <li className='bg-gray-200 px-2  py-1 m-2 rounded-lg'>firebase</li>
                        <li className='bg-gray-200 px-2 py-1 m-2 rounded-lg'>TailwindCSS</li>
                    </ul>
                </div>
                <div className='flex justify-center'>
                <button className='flex  bg-blue-500 text-white p-2 h-[50px] w-[140px] items-center rounded-lg justify-between m-2 '>Source code  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
</button>
                <button className='flex  bg-blue-500 text-white p-2 h-[50px] w-[140px] items-center rounded-lg justify-between m-2 '>View Live<svg className='w-[30px] h-[30px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</button>
</div>
             </div>
             <div className='border p-4 w-6/12 rounded-lg shadow-lg m-2 bg-white'>
                <img alt='project-pic' className='h-[300px] border rounded-lg  ' src="https://blog.hootsuite.com/wp-content/uploads/2023/05/How-to-Create-a-YouTube-Channel-03.png"/>
                <h1 className='text-center p-2 font-bold '>My-youtube Clone</h1>
                <div className=''>
                    <ul className='flex justify-center'>
                        <li className='bg-gray-200 px-2 py-1 m-2 rounded-lg'>Reactjs</li>
                        <li className='bg-gray-200 px-2  py-1 m-2 rounded-lg'>firebase</li>
                        <li className='bg-gray-200 px-2 py-1 m-2 rounded-lg'>TailwindCSS</li>
                    </ul>
                </div>
                <div className='flex justify-center'>
                <button className='flex  bg-blue-500 text-white p-2 h-[50px] w-[140px] items-center rounded-lg justify-between m-2 '>Source code  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
</button>
                <button className='flex  bg-blue-500 text-white p-2 h-[50px] w-[140px] items-center rounded-lg justify-between m-2 '>View Live<svg className='w-[30px] h-[30px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</button>
</div>
             </div>
        </div>
    </div>
    </div>
  )
}

export default Projects