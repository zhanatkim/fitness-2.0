// Swiper 7.4.1
import Swiper from './vendor/swiper';
import './vendor/focus-visible-polyfill';

export const coachesSwiper = new Swiper('.coaches__swiper', {
  cssMode: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: '.coaches__button--next',
    prevEl: '.coaches__button--prev',
  },
  mousewheel: true,
  keyboard: true,
});

export const feedbackSwiper = new Swiper('.feedback__swiper', {
  cssMode: true,
  navigation: {
    nextEl: '.feedback__button--next',
    prevEl: '.feedback__button--prev',
  },
  mousewheel: true,
  keyboard: true,
});
