import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BodyParts from './BodyParts';

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'x-rapidapi-key': '2a38ad0a95mshf82a7dc033f6db7p1c224bjsne012f6cffc4c',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};


function SearchExercise() {

  const [search, setSearch] = useState([])
  const [bodyPart,setBodyPart] = useState([])
  
 const handleBodyPart = () =>{

      useEffect(() => {
        const exercise = async ()=>
        {
          try {
            const response = await axios.request(options);
           const  ListAll = response.data
           const filteredData = ListAll
            console.log(response.data)
            setBodyPart(filteredData)
         
          } catch (error) {
            console.error(error)
          }

        }
        exercise();
        // console.log(search) 
        
      }, [])
    
  }
  handleBodyPart();
  

  
  return (<>
  <div className=" mt-10 gap-6 px-10 flex flex-row overflow-scroll scrollbar-hide">
  {bodyPart.map((item)=>{
  return  <div className="flex p-5 gap-10 duration-300 transform hover:scale-110 ease-in-out">
    <BodyParts item = {item}  />
  </div>

})}


  </div>

    
 </> )
}

export default SearchExercise