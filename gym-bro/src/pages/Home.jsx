import React from 'react'


function Home() {
  return (<>
  
    <div className='grid grid-cold-1 md:grid-cols-2 '>
      <div className="w-full flex flex-col gap-10">
      
      <h1 className='text-3xl'>Fitness Club</h1>
      </div>
      <div className=" hidden md:block pr-10 pl-5 absolute left-[50%] -top-7">
       <img className='w-full object-cover' src="/assets/images/banner.png" alt="a fit girl walking to a gym with her" />
      
      </div>
    </div>

  </>)
}

export default Home