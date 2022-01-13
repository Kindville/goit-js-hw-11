

const axios = require('axios').default;

  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const KEY = '25204764-ad3097bdd52dd29ccb650192a';

async function fetchPictures(query, page, perPage) {
  const response = await axios.get(`?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&${perPage}`,)
  return response
}
//         .then(response => {
//           if (response.status === 404) {
//                  return  Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
//           }
//           if (response.ok) return response.json();
//           throw new Error('Error fetching data')   
//         })
    
//   }

export default{fetchPictures}

