const dropdown = document.querySelector('.s-dropdown');
const dropdownToggle = dropdown.querySelector('.s-dropdown__toggle');
const dropdownTipClosed = dropdown.querySelector('.s-dropdown__closed');
const dropdownTipOpened = dropdown.querySelector('.s-dropdown__opened');

dropdownToggle.addEventListener('click', function () {
  dropdown.classList.toggle('is-menu-visible');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && dropdown.classList.contains('is-menu-visible')) {
    evt.preventDefault();
    dropdown.classList.toggle('is-menu-visible');
  }
});
