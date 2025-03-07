import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Exercise from './pages/Exercise'
import NavBar from './layouts/NavBar'
import Footer from './layouts/Footer'


function App() {
  return (
  <>
  <section className='w-64'> 
    <NavBar/>
  </section>
    <Routes>
    
      <Route path='/' element = {<Home/>}>Home</Route>
      <Route path='/exercise' element = {<Exercise/>}>Exercises</Route>
    </Routes>
    <Footer/>
   
    
 </> )
}

export default App