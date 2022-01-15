const axios = require('axios').default;

axios.defaults.baseURL = 'https://pixabay.com/api/'
const KEY = '25204764-ad3097bdd52dd29ccb650192a'

export  function fetchPictures(query, page, perPage) {
   const response =  axios.get(
     `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`)
.then(response => response.data)
  return response;

//    

  //  return fetch(`https://pixabay.com/api/?key=25204764-ad3097bdd52dd29ccb650192a&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`)
  //   .then(response => response.json())
  //   .then(data =>  data)
}


