import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className='  py-8 '>
        <ul className='flex flex-row items-center  justify-around  font-serif'> 
            <li className='size-16' ><NavLink to='/' ><img className='w-full outline-none' src="/assets/logos/Logo1.png" alt="gym-bro logo" /></NavLink></li>
            <div className="flex  mr-20 mt-5 gap-10 justify-center">
                <li>
                    <NavLink className={({isActive})=>`text-black text-2xl ${isActive? "underline underline-offset-4 decoration-rose-600": ""}`}
                     to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> `text-black text-2xl ${isActive? "underline underline-offset-4 decoration-rose-600":""}`}   to="/exercise">Exercise</NavLink>
                </li>
               
            </div>
        </ul>
    </div>
  )
}

export default NavBar