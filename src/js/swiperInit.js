import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperRestMainPg = new Swiper('.restaurant-swiper', {
  modules: [Navigation],
  setWrapperSize: true,
  uniqueNavElements: true,
  speed: 300,
  spaceBetween: 20,
  slidesPerView: 2,
  breakpoints: {
    768: {
      spaceBetween: 32,
      slidesPerView: 2,
    },
    1440: {
      spaceBetween: 32,
      slidesPerView: 4.833,
      grabCursor: true,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev',
  },
});

const swiperHotelMainPg = new Swiper('.hotel-swiper', {
  modules: [Navigation],
  uniqueNavElements: true,
  setWrapperSize: true,
  speed: 300,
  spaceBetween: 20,
  slidesPerView: 2,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev',
  },
});


export { swiperRestMainPg, swiperHotelMainPg,};
