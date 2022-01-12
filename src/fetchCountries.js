import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const axios = require('axios').default;

function fetchPictures(name) {
  if (name) {
      return fetch(`https://pixabay.com/api?key=25204764-ad3097bdd52dd29ccb650192a&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`,)
  
        .then(response => {
          if (response.status === 404) {
                 return  Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
          }
        //  console.log('then', response);
          if (response.ok) return response.json();
          throw new Error('Error fetching data')   
        })
    //  .catch(error =>
    //     console.log('catch', error));
  }
}
export default{fetchPictures}

