import libraryHeaderTpl from '../templates/libraryHeaderTpl.hbs';
import headerInputTpl from '../templates/headerInputTpl.hbs';
import { onChangeCollection } from "./link-to-localstorage";
import { renderWatchedBtn } from "./engine";
import mainRefs from "./getRefs";
// замена кнопок sign in и my library
// const signIn = document.querySelector('[data-action="registerIn"]');
// const headerBtnSignIn = document.querySelector('[data-action="Sind-In"]');
// const headerBtnSignUp = document.querySelector('[data-action="registerUp"]');

const refs = mainRefs();
const libraryPage = document.querySelector('.js-library');
const homePage = document.querySelector('.js-home');

const homeBgcContainer = document.getElementById('home');
const homeContainer = document.querySelector('.home-container');
const formContainer = document.querySelector('.form-container');
const itemHome = document.querySelector('.item-home');
const itemLibrary = document.querySelector('.item-library');

function onLibraryPageClick(e) {
  e.preventDefault();
  homeContainer.classList.replace('home-container', 'library-container');
  homeBgcContainer.classList.replace('home-bgc-container', 'library-bgc-container');
  renderButton();
  itemHome.classList.remove('current');
  itemLibrary.classList.add('current');
  renderWatchedBtn()
  onChangeCollection(e)
}

function renderButton() {
  const makeBtn = document.createElement('div');
  makeBtn.classList.add('btn-container');
  makeBtn.setAttribute('data-btn', 'container');
  makeBtn.insertAdjacentHTML('afterbegin', libraryHeaderTpl());
  formContainer.replaceWith(makeBtn);
}

function onHomePageClick(e) {
  e.preventDefault();
  homeContainer.classList.replace('library-container', 'home-container');
  homeBgcContainer.classList.replace('library-bgc-container', 'home-bgc-container');
  renderSearchInput();
  onChangeCollection(e);
  itemLibrary.classList.remove('current');
  itemHome.classList.add('current');
}

function renderSearchInput() {
  const btnContainer = document.querySelector('[data-btn="container"]');
  btnContainer.replaceWith(formContainer);
}

// замена кнопок sign in и my library
// function onSignInBtnClick(e) {
//   libraryPage.classList.remove('visually-hidden');
//   headerBtnSignIn.classList.add('visually-hidden');
// }
// function onSignUpBtnClick(e) {
//   libraryPage.classList.remove('visually-hidden');
//   headerBtnSignIn.classList.add('visually-hidden');
// }

function headerRefs() {
  const refs = {
    libraryPage: document.querySelector('.js-library'),
    homePage: document.querySelector('.js-home'),
    homeBgcContainer: document.getElementById('home'),
    homeContainer: document.querySelector('.home-container'),
    formContainer: document.querySelector('.form-container'),
    itemHome: document.querySelector('.item-home'),
    itemLibrary: document.querySelector('.item-library'),
  }
  return refs
}

libraryPage.addEventListener('click', onLibraryPageClick);
homePage.addEventListener('click', onHomePageClick);
refs.logo.addEventListener('click', onHomePageClick);
// signIn.addEventListener('click', onSignInBtnClick);
// headerBtnSignUp.addEventListener('click', onSignUpBtnClick);

export {renderButton,headerRefs,onLibraryPageClick}