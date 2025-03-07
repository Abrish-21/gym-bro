import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='w-full'>
        <ul className='flex gap-6 items-end mt-4 justify-start flex-row'> 
            <li><Link to='/' ><img src="/assets/logos/Logo1.png" alt="gym-bro logo" /></Link></li>
            <li> <Link  to='/' >Home</Link></li>
            <li><Link to='/exercise'>Exercises</Link></li>
        </ul>
    </div>
  )
}

export default NavBar