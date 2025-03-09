export const options = {
  url: 'https://exercisedb.p.rapidapi.com/status',
    method: 'GET',
    headers: {
      'x-rapidapi-key': '90daf35750msh11588106a0e0b1bp1061d3jsn141126a69de8',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) =>{
  
  try{
    const response = await fetch(url, options)
    const data =  await response.json()
    console.log(data)

  }
  catch{
    console.error()

  }

}