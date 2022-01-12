import './css/styles.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './fetchCountries'

const searchForm = document.querySelector('#search-form')
const searchBtn = document.querySelector('button')

searchBtn.addEventListener('input', onInputclick)

<<<<<<< HEAD
const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();
  const formValue = e.target.value.trim();
  if (formValue === '') {
     return  clearCountryCard();
  }
  
  API.fetchCountries(formValue).then(data => {
    clearCountryCard();
     if (data.length > 10) {
      Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    
    } else if (data.length === 1) {
      renderCountryCard(data, countryCard);
    } else if (data.length <= 10) {
      renderCountryCard(data, countryCards);
    }
  })
  .catch(error =>
         error);
}

function renderCountryCard(countries, template) {
  const markUp = countries.map(country => template(country)).join('');
  countryList.innerHTML = markUp;
}
function clearCountryCard() {
  countryList.innerHTML ='';
=======
function onInputclick(e) {
  e.preventDefault;
  fetchPictures()
>>>>>>> 56aab4e50a69276c9c51a76b538eb9f57424c10d
}