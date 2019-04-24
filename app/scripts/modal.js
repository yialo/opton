'use strict';

const pageWithModal = document.querySelector('.s-modal');
const modalOverlay = pageWithModal.querySelector('.s-modal__overlay');
const modalOpenButton = pageWithModal.querySelector('.s-modal__open-button');
const modalCloseButton = pageWithModal.querySelector('.s-modal__close-button');
const modalCancelButton = pageWithModal.querySelector('.s-modal__cancel-button');

modalOpenButton.addEventListener('click', (evt) => {
  if (!pageWithModal.classList.contains('is-modal-visible')) {
    evt.preventDefault();
    pageWithModal.classList.add('is-modal-visible');
  }
});

modalCloseButton.addEventListener('click', () => {
  if (pageWithModal.classList.contains('is-modal-visible')) {
    pageWithModal.classList.remove('is-modal-visible');
  }
});

modalCancelButton.addEventListener('click', () => {
  if (pageWithModal.classList.contains('is-modal-visible')) {
    pageWithModal.classList.remove('is-modal-visible');
  }
});

modalOverlay.addEventListener('click', () => {
  if (pageWithModal.classList.contains('is-modal-visible')) {
    pageWithModal.classList.remove('is-modal-visible');
  }
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27 && pageWithModal.classList.contains('is-modal-visible')) {
    evt.preventDefault();
    pageWithModal.classList.remove('is-modal-visible');
  }
});
