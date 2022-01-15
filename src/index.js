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
loadMore.addEventListener('click', onLoadMoreBtn)

let query = '';
let page = 1;
const perPage = 40;
let simpleLightbox;

function onSearchForm(e) {
  e.preventDefault();
  page = 1;
   query = e.currentTarget.searchQuery.value.trim();
  gallery.innerHTML = ''
  
  if (query === '') {
    // console.log('mistake');
      Notiflix.Notify.failure('Please specify your search.')
    return
  }
  fetchPictures(query, page, perPage)
      .then((data ) => { data
        if (data.totalHits === 0) {
          Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
        } else {
          // console.log(data.totalHits);
        renderGallery(data.hits)
        simpleLightbox = new SimpleLightbox('.gallery a').refresh()
         Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
        
        if (data.totalHits > perPage) {
          loadMore.classList.remove('is-hidden')
        }
    }
    })
  .catch(error => error)
}

function renderGallery(images) {
  const markup = images
    .map(image => {
      const { largeImageURL, webformatURL, tags, likes, views, comments, downloads }
        = image

      return `<a class= "photo" href="${largeImageURL}"> 
          <div class="photo-card">
          <img class= "gallery-img" src="${webformatURL} " alt="${tags}" loading="lazy" width="310" height="100" />
          <div class="info">
            <p class="info-item">
              <b>Likes</b>${likes}
            </p>
            <p class="info-item">
              <b>Views</b>${views}
            </p>
            <p class="info-item">
              <b>Comments</b>${comments}
            </p>
            <p class="info-item">
              <b>Downloads</b>${downloads}
            </p>
          </div>
        </div>
          </a>`
            })
  .join('')
    gallery.insertAdjacentHTML('beforeend', markup)
}

function onLoadMoreBtn() {
  page += 1;
  simpleLightbox.destroy()

  fetchPictures(query, page, perPage)
    .then((data ) => { data
      renderGallery(data.hits)
      simpleLightbox = new SimpleLightbox('.gallery', { captionPosition: 'bottom', captionsData: 'alt', captionDelay: 250 }).refresh()
      simpleLightbox.on('show.simpleLightbox', function (e) {
        e.preventDefault()
      })
      const totalPages = Math.ceil(data.totalHits / perPage)

      if (page >= totalPages) {
        loadMore.classList.add('is-hidden')
          Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
      }
  })
}