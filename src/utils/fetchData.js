



import React from 'react'

function fetchData() {

  
 const options = {
    method: 'GET',
    url: 'https://exercise-db-fitness-workout-gym.p.rapidapi.com/exercise/90_90_Hamstring',
    headers: {
      'x-rapidapi-key': '90daf35750msh11588106a0e0b1bp1061d3jsn141126a69de8',
      'x-rapidapi-host': 'exercise-db-fitness-workout-gym.p.rapidapi.com'
    }
  };


  return (
    <div>fetchData</div>
  )
}

export default fetchData


