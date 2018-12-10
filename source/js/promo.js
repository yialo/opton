const promoSlider = document.querySelector('.slider');
const promoSliderButton_1 = document.querySelector('.slider__control-button--1');
const promoSliderButton_2 = document.querySelector('.slider__control-button--2');
const promoSliderButton_3 = document.querySelector('.slider__control-button--3');

promoSliderButton_1.addEventListener('click', function () {
  if (!promoSlider.classList.contains('js-slide-1')) {
    promoSlider.classList.add('js-slide-1');
    promoSlider.classList.remove('js-slide-2');
    promoSlider.classList.remove('js-slide-3');
  }
});

promoSliderButton_2.addEventListener('click', function () {
  if (!promoSlider.classList.contains('js-slide-2')) {
    promoSlider.classList.remove('js-slide-1');
    promoSlider.classList.add('js-slide-2');
    promoSlider.classList.remove('js-slide-3');
  }
});

promoSliderButton_3.addEventListener('click', function () {
  if (!promoSlider.classList.contains('js-slide-3')) {
    promoSlider.classList.remove('js-slide-1');
    promoSlider.classList.remove('js-slide-2');
    promoSlider.classList.add('js-slide-3');
  }
});
