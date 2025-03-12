
export const exerciseOptions = {
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

}

export default fetchData


