// import MovieSearch from './apiService.js';
// import modalMovieTemplate from '../templates/modalMovieTemplate.hbs';
// import {onBtnWatchedClick, onQueue} from "./add-watched";
// // import onQueue from "./onQueue";

// const movieSearch = new MovieSearch();
// const GENRES = [];
// const refs = {
//   filmCard: document.querySelector('.movie-card'),
//   movieCardContainer: document.querySelector('.gallery'),
//   closeModalBtn: document.querySelector('[data-modal-close]'),
//   modal: document.querySelector('[data-modal]'),
//   body: document.querySelector('body'),
//   backdropMoviecard: document.querySelector('.backdrop-movie-card'),
// };


// refs.movieCardContainer.addEventListener('click', onGalleryClick);


// let isMovieId = null
// async function onGalleryClick(event) {
//   event.preventDefault();
//   refs.filmCard.innerHTML = '';
//   const isGallery = event.target.classList.contains('gallery');

//   if (isGallery) {
//     return;
//   };

//   openModal();
//   isMovieId = await event.target.closest('li').getAttribute('data-id');
//   await movieSearch.fetchDetailsMovie(isMovieId).then(renderModalMovie);
//   const btnRefs = getModalRefs();
//   btnRefs.btnWatched.addEventListener('click', onBtnWatchedClick);
//   btnRefs.btnQueue.addEventListener('click', onQueue)
// };


// function openModal() {
//   refs.modal.classList.remove('backdrop-hidden');
//   refs.body.classList.add('modal-open');
//   refs.closeModalBtn.addEventListener('click', closeModal);
//   window.addEventListener('keydown', onKeyPress);
//   refs.backdropMoviecard.addEventListener('click', onBackdropClick);
// };

// function closeModal() {
//   refs.modal.classList.add('backdrop-hidden');
//   refs.body.classList.remove('modal-open');
//   refs.closeModalBtn.removeEventListener('click', closeModal);
//   window.removeEventListener('keydown', onKeyPress);
//   refs.backdropMoviecard.removeEventListener('click', onBackdropClick);
// };


// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     closeModal();
//   };
// };

// function onKeyPress(event) {
//   if (event.code === 'Escape') {
//     closeModal();
//   }
// };

// function getModalRefs() {
//   const modalRefs = {
//     btnWatched: document.querySelector('[data-action="add-to-watched"]'),
//     btnQueue: document.querySelector('[data-action="add-to-queue"]'),
//   }
//   return modalRefs;
// }
// let movieId = '';
// function renderModalMovie(movie) {
//   movieId = movie;
//   const movieDetails = movie;
//   movieDetails.popularity = movieDetails.popularity.toFixed(1);
//   movieDetails.genres = movieDetails.genres.map(genre => {
//     return ` ` + genre.name;
//   });
//   const cardMarkup = modalMovieTemplate(movieDetails);
//   refs.filmCard.insertAdjacentHTML('beforeend', cardMarkup);
// };

// function getMovieId() {
//   return isMovieId
// }

// export {getMovieId}