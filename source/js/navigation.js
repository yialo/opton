const pageHeader = document.querySelector('.page-header');
const pageHeaderButton = pageHeader.querySelector('.page-header__button');
const pageHeaderButtonTextClosed = pageHeader.querySelector('.page-header__button-text--closed');
const pageHeaderButtonTextOpened = pageHeader.querySelector('.page-header__button-text--opened');

pageHeaderButton.addEventListener('click', function () {
  pageHeader.classList.toggle('is-visible');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && pageHeader.classList.contains('is-visible')) {
    evt.preventDefault();
    pageHeader.classList.toggle('is-visible');
  }
});
