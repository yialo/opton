const pageWithModal = document.querySelector('.modal');
const modalOverlay = pageWithModal.querySelector('.modal__overlay');
const modalOpenButton = pageWithModal.querySelector('.modal__open-button');
const modalCloseButton = pageWithModal.querySelector('.modal__close-button');
const modalCancelButton = pageWithModal.querySelector('.modal__cancel-button');

modalOpenButton.addEventListener('click', function (evt) {
  if (!pageWithModal.classList.contains('is-modal-visible')) {
    evt.preventDefault();
    pageWithModal.classList.add('is-modal-visible');
  }
});

modalCloseButton.addEventListener('click' , function (evt) {
  if (pageWithModal.classList.contains('is-modal-visible')) {
    pageWithModal.classList.remove('is-modal-visible');
  }
});

modalCancelButton.addEventListener('click' , function (evt) {
  if (pageWithModal.classList.contains('is-modal-visible')) {
    pageWithModal.classList.remove('is-modal-visible');
  }
});

modalOverlay.addEventListener('click', function () {
  if (pageWithModal.classList.contains('is-modal-visible')) {
    pageWithModal.classList.remove('is-modal-visible');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && pageWithModal.classList.contains('is-modal-visible')) {
    evt.preventDefault();
    pageWithModal.classList.remove('is-modal-visible');
  }
});
