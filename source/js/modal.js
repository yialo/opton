const pageWithModal = document.querySelector('.page--contains-modal');
const modalOpenButton = document.querySelector('.page__modal-opener');
const modalCloseButton = document.querySelector('.page__modal-closer');

modalOpenButton.addEventListener('click', function (evt) {
  if (!pageWithModal.classList.contains('js-modal-is-visible')) {
    evt.preventDefault();
    pageWithModal.classList.add('js-modal-is-visible');
  }
});

modalCloseButton.addEventListener('click' , function (evt) {
  if (pageWithModal.classList.contains('js-modal-is-visible')) {
    pageWithModal.classList.remove('js-modal-is-visible');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && pageWithModal.classList.contains('js-modal-is-visible')) {
    evt.preventDefault();
    pageWithModal.classList.remove('js-modal-is-visible');
  }
});
