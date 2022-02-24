const axios = require('axios');


async function makeGetRequest() {
axios.get('https://api.themoviedb.org/3/movie/100?api_key=66e361df24a7c08c30b1f0baa93f2b8c')
  .then(response => {
    console.log(response);    
  })
  .catch(error => {
    console.log(error);
  });
}


makeGetRequest()