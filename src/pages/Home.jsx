import React, { useState , useEffect} from 'react'
import searchExercise from '../components/SearchExercise'
import SearchExercise from '../components/SearchExercise'
import axios from 'axios'
import { exerciseOptions } from '../utils/fetchData'
import ExerciseCard from '../components/ExerciseCard'
import { exerciseOp } from './Exercise'

const names = ['abrham', 'james','cole','sami']

function Home() {
const [search, setSearch] = useState('')
const [bodyPart, setBodyPart] = useState([])
  

  const [exercise,setExercise] = useState([])
  const searchExercise = async ()=>
  {
        try {
          const response = await axios.request(exerciseOp);
         const  ListAll = response.data
         const filteredData = ListAll.filter((item)=> (item.name).includes(search))
          console.log(response.data)
          setExercise(filteredData)
       
        } catch (error) {
          console.error(error)
        }
  
      }


  
  searchExercise()



  



  return (<>
  {/* hero section */}
  <section className=' '>
    
      <section className=' h-auto md:h-screen'>
        <div className=' md:gird md:grid-cols-2 mt-14 md:mt-32 '>
          <div className="w-full pl-11 flex flex-col  md:px-14 gap-9 items-start justify-end">
    
          <h1 className='text-3xl  text-rose-600 font-bold'>Fitness Club</h1>
          <h1 className='text-5xl text-gray-900 leading-normal font-semibold line-height font-serif'>Sweat, Smile <br /> And Repeat</h1>
          <p className='font-serif font-bold'>Checkout the most effective exercise personalized for you</p>
          <button className=' py-2 px-4 bg-rose-600 text-white text-2xl font-semibold '>Explore Exercises</button>
    
    
          </div>
          <div className=" hidden md:block pr-10 pl-5 absolute left-[50%] -top-9 ">
           <img className='w-full object-cover z-20' src="/assets/images/banner.png" alt="a fit girl walking to a gym with her" />
    
          </div>
        </div>
        <section className='hidden md:block md:px-14 mt-14 absolute -z-30'>
        <h1 className='text-[210px] text-red-100  -z-20 font-bold  '>Exercise</h1>
      </section>
      </section>
      {/* This is the search  section */}
      <section className='mt-14 flex flex-col gap-8 items-center justify-center px-5'>
        <h1 className='text-3xl leading-snug text-gray-900 font-sans font-bold'>Awesome Exercise <br />
         <span className='ml-28'> You</span> <br /> <span className='ml-10'>Should Know</span></h1>
         <div className="flex w-full justify-center">
          <input value={search} onChange={(e)=>setSearch(e.target.value)} className='outline-none border-2 border-gray-300 px-6 py-4 w-3/4' placeholder='Search Exercise' type="text" name="" id="" />
          <button onClick={searchExercise()} className='bg-rose-600 px-4 py-2'>Search</button>
         </div>
      </section>
      <p>{search}</p>

      <section className='mb-10'>
       <SearchExercise/>
      </section>
     <section id='exercise' className=' mt-20 flex flex-col '>
      <div className="flex flex-col gap-10 py-20 justify-start items-center ">
        <p className='text-3xl'>Explore your Exercise</p>
        <p className='border-2  border-rose-200 w-[90%] '></p>
      </div>
      <section className='px-10'>
        <div className="grid grid-cols-1 md:pl-3 md:grid-cols-2 gap-10 lg:grid-cols-3   ">
              {
                exercise.map((item)=>{
                  return <ExerciseCard name = {item.name} target = {item.target} url ={item.gifUrl}  />
                })
              }
        
            </div>
      </section>
     </section>
      
  </section>


  </>)
}

export default Home