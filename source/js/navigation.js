const pageHeader = document.querySelector('.page-header');
const pageHeaderButton = pageHeader.querySelector('.page-header__button');
const pageHeaderButtonTextClosed = pageHeader.querySelector('.page-header__button-text--closed');
const pageHeaderButtonTextOpened = pageHeader.querySelector('.page-header__button-text--opened');

pageHeaderButton.addEventListener('click', function () {
  pageHeader.classList.toggle('is-visible');
});
