import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Exercise from './pages/Exercise'
import NavBar from './layouts/NavBar'
import Footer from './layouts/Footer'


function App() {
  return (
  <div className='scrollbar-hide'>
  <section className='w-full md:w-1/2'> 
    <NavBar/>
  </section>
    <Routes>
    
      <Route path='/' element = {<Home/>}>Home</Route>
      <Route path='/exercise' element = {<Exercise/>}>Exercises</Route>
    </Routes>
    <Footer/>
   
    
 </div> )
}

export default App