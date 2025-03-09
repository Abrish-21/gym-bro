import React, { useEffect, useState } from 'react'
import { fetchData, options } from '../utils/fetchData'


function SearchExercise() {

  const [search, setSearch] = useState('')
  const [bodyPart,setBodyPart] = useState([])
  const handleSearch = () =>{
   
    useEffect(()=>
    {
      
      fetchData( 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',options);

      }
    ,[])
    
  }
  handleSearch();
  
  
  


  return (<>
    <p>THis is the api data:</p>
    <button onClick={handleSearch}> show data</button>
    
 </> )
}

export default SearchExercise