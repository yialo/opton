const pageWithModal = document.querySelector('.modal');
const modalOverlay = pageWithModal.querySelector('.modal__overlay');
const modalOpenButton = pageWithModal.querySelector('.modal__open-button');
const modalCloseButton = pageWithModal.querySelector('.modal__close-button');

modalOpenButton.addEventListener('click', function (evt) {
  if (!pageWithModal.classList.contains('is-visible')) {
    evt.preventDefault();
    pageWithModal.classList.add('is-visible');
  }
});

modalCloseButton.addEventListener('click' , function (evt) {
  if (pageWithModal.classList.contains('is-visible')) {
    pageWithModal.classList.remove('is-visible');
  }
});

modalOverlay.addEventListener('click', function () {
  if (pageWithModal.classList.contains('is-visible')) {
    pageWithModal.classList.remove('is-visible');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && pageWithModal.classList.contains('is-visible')) {
    evt.preventDefault();
    pageWithModal.classList.remove('is-visible');
  }
});
