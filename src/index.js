import './css/styles.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {fetchPictures } from './fetchImages';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css'


const searchForm = document.querySelector('#search-form')
const loadMore = document.querySelector('.load-more')
const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit',  onSearchForm )
// console.log(searchForm);
// loadMore.addEventListener('click', onLoadMoreBtn)
let query = '';
let page = 1;
const perPage = 40;
let simpleLightbox


function onSearchForm(e) {
  e.preventDefault();
  page = 1;
   query = e.currentTarget.searchQuery.value.trim();
  gallery.innerHTML = ''
  
  if (query === '') {
    console.log('mistake');
      Notiflix.Notify.failure('Please specify your search.')
    return
  }
   fetchPictures(query, page, perPage)
  
  //   .then(({ data }) => {
  //     if (data.totalHits === 0) {
  //     Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
  //     } else {
  //       renderGallery(data.hits)
  //       simpleLightbox = new SimpleLightbox('.gallery').refresh()
  //        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
        
  //       if (data.totalHits > perPage) {
  //         loadMore.classList.remove('is-hidden')

  //       }
  //   }
  //   })
  // .catch(error)
}





// function renderGallery(images) {
//   const markup = images
//     .map(image => {
//       const { largeImageURL, webformatURL, tags, likes, views, comments, downloads }
//         = image

//       return `<a href="${largeImageURL}"> 
//           <div class="photo-card">
//           <img src="${webformatURL} " alt="${tags}" loading="lazy" />
//           <div class="info">
//             <p class="info-item">
//               <b>Likes</b>${likes}
//             </p>
//             <p class="info-item">
//               <b>Views</b>${views}
//             </p>
//             <p class="info-item">
//               <b>Comments</b>${comments}
//             </p>
//             <p class="info-item">
//               <b>Downloads</b>${downloads}
//             </p>
//           </div>
//         </div>
//           </a>`
//             })
//   .join('')
//     gallery.innerHTML(markup)
// }