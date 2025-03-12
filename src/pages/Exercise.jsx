import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseCard from '../components/ExerciseCard';

export const exerciseOp = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  params: {
    limit: '10',
    offset: '0'
  },
  headers: {
    'x-rapidapi-key': '2a38ad0a95mshf82a7dc033f6db7p1c224bjsne012f6cffc4c',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

function Exercise() {

  const [exercise,setExercise] = useState([])

      useEffect(() => {
        const exercise = async ()=>
        {
          try {
            const response = await axios.request(options);
           const  ListAll = response.data
            console.log(response.data)
            setExercise(ListAll)
         
          } catch (error) {
            console.error(error)
          }

        }
        exercise();
        
        
      }, []); 

  return (<>
    {/* <div className="grid grid-cols-1 md:pl-3 md:grid-cols-2 gap-10 lg:grid-cols-3   ">
      {
        exercise.map((item)=>{
          return <ExerciseCard name = {item.name} target = {item.target} url ={item.gifUrl}  />
        })
      }

    </div> */}
  </>)
}// import { fetch// import { fetchData } from '../utils/fetchData'Data } from '../utils/fetchData'

export default Exercise