import React from 'react'


function Home() {
  return (<>
  
    <section className='h-screen'>
      <div className='grid grid-cold-1 md:grid-cols-2 mt-32 '>
        <div className="w-full flex px-5 md:px-14 flex-col gap-9 items-start justify-center">
      
        <h1 className='text-3xl  text-rose-600 font-bold'>Fitness Club</h1>
        <h1 className='text-5xl leading-normal font-semibold line-height font-serif'>Sweat, Smile <br /> And Repeat</h1>
        <p className='text-xl'>Checkout the most effective exercise personalized for you</p>
        <button className='px-4 py-2 bg-rose-600 text-white text-2xl font-semibold '>Explore Exercises</button>
        
      
        </div>
        <div className=" hidden md:block pr-10 pl-5 absolute left-[50%] -top-9 ">
         <img className='w-full object-cover z-20' src="/assets/images/banner.png" alt="a fit girl walking to a gym with her" />
      
        </div>
      </div>
      <section className='hidden md:block px-14 mt-24 absolute -z-30'>
      <h1 className='text-[210px] text-red-100  -z-20 font-bold  '>Exercise</h1>
    </section>
    </section>


  </>)
}

export default Home