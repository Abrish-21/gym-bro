import React from 'react'

function ExerciseCard(props) {
  return (<>
    <div className="">
      
    <div className='w-[25rem] h-[35rem]  after:decoration-orange-700 grid grid-rows-[20rem_8rem]  duration-500 scale-100 hover:scale-110'>
        <div className="">
          <p className='border-2  border-rose-500 w-full'></p>
           <img src= {props.url} className='object-cover w-full' alt="" /> 
        </div>
        <div className="flex bg-white  px-10 py-3 gap-5   text-white font-sans flex-col justify-center ">
            <div className="flex gap-6   ">
                <button className=' px-4 py-2 rounded-full hover:bg-red-100 bg-purple-400'>{props.target}</button>
                <button className=' px-4 py-2 rounded-full hover:bg-red-100 bg-rose-500'>{props.target}</button>
            </div>
            <div className="text-2xl line-clamp-1 text-black ">{props.name}</div>
 
        </div>

    </div>
    </div>
  </>)
}

export default ExerciseCard