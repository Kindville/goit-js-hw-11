// import axios from 'axios'
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// axios.defaults.baseURL = 'https://pixabay.com/api/'
// const KEY = '25204764-ad3097bdd52dd29ccb650192a'

export function fetchPictures(query, page, perPage) {
   console.log(query, page, perPage);
  // return response = await axios.get(
  //   `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
  // )
  //  console.log(1);     //  &page=${page}&per_page=${perPage}

  //  return fetch(`https://pixabay.com/api/?key=25204764-ad3097bdd52dd29ccb650192a&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`)
  // return fetch('https://pixabay.com/api/?key=25204764-ad3097bdd52dd29ccb650192a&q=yellow+flowers&image_type=photo&pretty=true')
  return fetch('https://pixabay.com/api/?key=25204764-ad3097bdd52dd29ccb650192a&q=yellow+flowers&image_type=photo&pretty=true')
        .then(response => {
          if (response.status === 404) {
                 return  Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
          }
          if (response.ok) return response.json();
          throw new Error('Error fetching data')   
        })
}


