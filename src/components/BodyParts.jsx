import React, { useState } from 'react'

function BodyParts(props) {
  
  
 
  return (<>

  <div className="size-60 bg-white z-50 rounded-md gap-10 flex flex-col items-center justify-start pt-14">
    <div className="size-10"><img src="/assets/icons/gym.png"  className='  w-full h-full object-cover' alt="" /></div>
    {<p className='font-serif text-2xl font-medium'>{props.item}</p>}
  </div>
   
  
    
   

 
  </>)
}

export default BodyParts