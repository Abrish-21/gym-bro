import axios from 'axios';

function fetData()
{
    return(

        const options = {
          method: 'GET',
          url: 'https://exercisedb.p.rapidapi.com/status',
          headers: {
            'x-rapidapi-key': '90daf35750msh11588106a0e0b1bp1061d3jsn141126a69de8',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    )
}
